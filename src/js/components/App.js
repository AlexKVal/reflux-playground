var React = require('react');
var Reflux = require('reflux');
var Store = require('../stores/Store');

var App = React.createClass({

  mixins: [Reflux.connect(Store)],

  render: function() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }

});

module.exports = App;
