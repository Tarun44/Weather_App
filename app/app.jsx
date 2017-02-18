var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('./components/main');
var Weather = require('./components/weather');
var About = require('./components/about');
var Example = require('./components/example');


// load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

require('style-loader!css-loader!./styles/app.css')

ReactDOM.render(
  <Router history={hashHistory}>
  	<Route path="/" component={Main}>
  		<Route path="about" component={About}/>
  		<Route path="example" component={Example}/>
  		<IndexRoute component={Weather}/>
  	</Route>
  </Router>,

  document.getElementById('app')
);