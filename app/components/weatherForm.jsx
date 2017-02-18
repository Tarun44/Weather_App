var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location= this.refs.location.value;

    if (location.length > 0){
      this.refs.location.value = ' ';
      this.props.onSearch(location);
    }
  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}  className="main">
        <div>
          <input type="search" ref="location" placeholder="Enter Location"/>
        </div>
        <div>
          <button className="button expanded hollow">Submit</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;