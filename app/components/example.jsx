var React =require('react');
var {Link}= require('react-router');

var Example = (props) => {
	return(
		<div>
			<h1 className="text-center">Example</h1>
			<p> Here are a few example locations to try out:</p>
			<ol>
				<li>
					<Link to='/?location=Hyderabad'>Hyderabad,India</Link>
				</li>
				<li>
				<Link to='/?location=Dehradun'>Dehradun,India</Link>
				</li>
			</ol>
		</div>
			)
};

module.exports = Example;