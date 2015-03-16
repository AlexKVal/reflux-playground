var React = require('react');

var Table = React.createClass({

  render: function() {
    return (
      <table className="table table-striped table-hover">
        {this.props.children}
      </table>
    );
  }

});

module.exports = Table;
