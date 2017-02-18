var React = require('react');

var DisplayMessage = ({temp, location}) => {

      return (
        <div>
          <h3 className="text-center">Its {temp}°C in {location}.</h3>
        </div>
      )
};

module.exports= DisplayMessage;