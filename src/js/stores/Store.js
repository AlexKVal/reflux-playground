var Reflux = require('reflux');
// var request = require('superagent');
var JSONP = require('browser-jsonp');

var Store = Reflux.createStore({
  data: {message: 'Start message'},

  init: function () {
    JSONP({
      url: 'http://www.filltext.com/',
      data: { rows: 10, name: '{firstName}' },
      success: function(data) {
        console.log(JSON.stringify(data));
        this.trigger({ message: data[0].name});
      }.bind(this)
    });
  },

  getInitialState: function() {
    return this.data;
  },
});

module.exports = Store;
