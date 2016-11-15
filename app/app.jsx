var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');


//Load foundation
$(document).foundation();

//app class
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <p>Boiler plate 3 project</p>,
  document.getElementById("app")
);
