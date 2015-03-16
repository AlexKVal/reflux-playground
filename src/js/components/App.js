var React = require('react');
var Reflux = require('reflux');
var Store = require('../stores/Store');
var Table = require('./Table');

var App = React.createClass({

  mixins: [Reflux.connect(Store)],

  render: function() {
    var items = this.state.people.map(function (person, i) {
      return <tr key={i}><td>{person.fname}</td></tr>;
    });

    return (
      <div className="container-fluid">
        <Table> {items} </Table>
      </div>
    );
  }

});

module.exports = App;
