var React = require('react');

var DisplayMessage = ({temp, location}) => {

      return (
          <h3 className="text-center">Its {temp}°C in {location}.</h3>
      )
};

module.exports= DisplayMessage;