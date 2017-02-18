var React =require('react');
var Nav = require('./nav');

var Main = (props) => {
	return (
			<div>
			<Nav/>
			<div>
				<div className="columns medium-6 large-4 small-centered col">
					{props.children}
				</div>
			</div>
			</div>
			);
}

module.exports = Main;