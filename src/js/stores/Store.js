var Reflux = require('reflux');
var request = require('superagent');

var Store = Reflux.createStore({
  data: {message: 'Start message'},
  init: function () {
    // request();
  },
  getInitialState: function() {
    return this.data;
  },
});

module.exports = Store;
