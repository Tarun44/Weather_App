var React =require('react');
var WeatherForm = require('./weatherForm');
var DisplayMessage = require('./displaymessage');
var openweathermap = require('../api/openweathermap');
var ErrorModal = require('./errormodal');

var Weather = React.createClass({
	getInitialState: function(){
		return{
			isLoading : false
		}
	},
	handleSearch: function(location){
		var that = this;
		this.setState({
			isLoading: true,
			errorMessage: undefined
		});

		openweathermap.getTemp(location).then(function(temp){
			that.setState({
			location: location,
			temp: temp,
			isLoading: false
		});
		}, function (errorMessage) {
			that.setState({
				isLoading: false,
				errorMessage: e.message
			});
			alert(errorMessage);
		});
		
	},
	render: function() {
		var {isLoading, temp, location, errorMessage} = this.state;

		function renderMessage (){
			if (isLoading){
				return <h3 className="text-center">Fetching Weather ....</h3>
			} else if( temp && location) {
				return <DisplayMessage temp={temp} location={location}/>;
			}
		}

		function renderError (e){
			if (typeof errorMessage == 'string'){
				return(
					<ErrorModal/>
					);  
			}
		}

		return(
			<div>
			<h1 className="text-center page-title">Get Weather</h1>
			<WeatherForm onSearch={this.handleSearch}/>
			{renderMessage()}
			{renderError()}
			</div>
			);
	}
});

module.exports = Weather;