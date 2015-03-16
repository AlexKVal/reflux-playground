var React = require('react');
var Reflux = require('reflux');
var Store = require('../stores/Store');

var App = React.createClass({

  mixins: [Reflux.connect(Store)],

  render: function() {
    var items = this.state.people.map(function (person, i) {
      return <li key={i}>{person.fname}</li>;
    });

    return (
      <ul>
        {items}
      </ul>
    );
  }

});

module.exports = App;
