var React = require('react');

var PersonRow = React.createClass({

  render: function() {
    return (
      <tr>
        <td>{this.props.person.fname}</td>
        <td>{this.props.person.lname}</td>
        <td>{this.props.person.tel}</td>
        <td>{this.props.person.address}</td>
        <td>{this.props.person.city}</td>
        <td>{this.props.person.state}</td>
        <td>{this.props.person.zip}</td>
      </tr>
    );
  }

});

module.exports = PersonRow;
