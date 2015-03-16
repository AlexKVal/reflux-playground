var Reflux = require('reflux');
// var request = require('superagent');
var JSONP = require('browser-jsonp');

var Store = Reflux.createStore({
  data: { people: [] },

  init: function () {
    JSONP({
      url: 'http://www.filltext.com/',
      data: {
        rows: 10,
        fname: '{firstName}',
        lname: '{lastName}',
        tel: '{phone|format}',
        address: '{streetAddress}',
        city: '{city}',
        state: '{usState|abbr}',
        zip: '{zip}'
      },
      success: function(data) {
        console.log(JSON.stringify(data));
        this.data.people = data;
        this.trigger(this.data);
      }.bind(this)
    });
  },

  getInitialState: function() {
    return this.data;
  },
});

module.exports = Store;
