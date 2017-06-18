var React =require('react');
var ReactDOM =require('react-dom');

var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');

var MainInterFace = React.createClass({
   render:function () {
       return(
           <h1>Application run from react :)</h1>
       )
   }
});

ReactDOM.render(
    <MainInterFace/>,
    document.getElementById('petAppointments')
);