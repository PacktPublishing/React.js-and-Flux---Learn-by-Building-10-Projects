var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var Workout = React.createClass({
	render: function(){
		if(this.props.workout.miles != ''){
			var miles = ' | '+this.props.workout.miles+ ' Miles';
		} else {
			var miles = '';
		}
		return(
			<li className="list-group-item">
				{this.props.workout.type} - {this.props.workout.minutes} Minutes {miles}
			</li>
		);
	}
	
});

module.exports = Workout;