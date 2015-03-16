var gulp = require('gulp');
var browserify = require('browserify');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var envify = require('envify');
var reactify = require('reactify');
var uglifyify = require('uglifyify');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var gStreamify = require('gulp-streamify');
var del = require('del');
// npm i --save-dev gulp browserify gulp-notify vinyl-source-stream watchify envify reactify uglifyify browser-sync gulp-util gulp-uglify gulp-streamify del

// Config options
var inJs = './src/js/main.js';
var outJs = 'main.js';
var outJsDir = './build/js';
var inHtml = './src/index.html';
var outDir = './build';

var production = process.env.NODE_ENV === 'production';

function handleError(task) {
  return function(err) {
    gutil.log(gutil.colors.red(err));
    notify.onError(task + ' failed, check the logs..')(err);
  };
}

gulp.task('clean', function(cb) {
  del(outDir);
  return cb();
});

function scripts(watch) {
  var bundler, rebundle;
  bundler = browserify({
    basedir: __dirname,
    debug: !production,
    entries: inJs,
    cache: {},
    packageCache: {},
    fullPaths: watch
  });
  if(watch) {
    bundler = watchify(bundler);
  }

  bundler.transform(reactify);
  bundler.transform({global: true}, envify);

  if(production) {
    bundler.transform({global: true}, uglifyify);
  }

  rebundle = function() {
    var stream = bundler.bundle();
    stream.on('error', handleError('Browserify'));

    stream = stream.pipe(source(outJs));

    if(production) {
      stream.pipe(gStreamify(uglify()));
    }

    return stream.pipe(gulp.dest(outJsDir));
  };
  bundler.on('update', function() {
    rebundle().pipe(browserSync.reload({stream: true}));
    gutil.log('Rebundle...');
  });
  return rebundle();
}

gulp.task('html', function() {
  return gulp.src(inHtml)
    .pipe(gulp.dest(outDir))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('watchHtml', function() {
  return gulp.watch(inHtml, ['html']);
});

// production
gulp.task('scripts', function() {
  production = true;
  process.env.NODE_ENV = 'production';
  return scripts(false);
});
// production
gulp.task('build', ['html', 'scripts']);

// development
gulp.task('watchScripts', function() {
  return scripts(true);
});

gulp.task('browser-sync', ['html', 'watchHtml', 'watchScripts'], function() {
  browserSync({ server: { baseDir: outDir } });
});

gulp.task('default', ['browser-sync']);
