var React = require('react');
var Reflux = require('reflux');
var Store = require('../stores/Store');
var Table = require('./Table');
var PersonRow = require('./PersonRow');

var App = React.createClass({

  mixins: [Reflux.connect(Store)],

  render: function() {
    var items = this.state.people.map(function (person, i) {
      return <PersonRow key={i} person={person}></PersonRow>;
    });

    return (
      <div className="container-fluid">
        <Table>
          <thead>
            <tr>
              <th>fname</th>
              <th>lname</th>
              <th>tel</th>
              <th>address</th>
              <th>city</th>
              <th>state</th>
              <th>zip</th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </Table>
      </div>
    );
  }

});

module.exports = App;
