var React = require('react');
var Store = require('./stores/Store');

var App = React.createClass({

  render: function() {
    return (
      <div>
        {this.props.message}
      </div>
    );
  }

});

module.exports = App;
