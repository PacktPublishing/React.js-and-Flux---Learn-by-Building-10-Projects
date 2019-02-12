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
				{this.props.workout.type} - {this.props.workout.minutes} Minutes {miles} <a href="#" onClick={this.onDelete.bind(this, this.props.workout.id)} className="delete">X</a>
			</li>
		);
	},

	onDelete: function(i, j){
		AppActions.removeWorkout(i);
	}
	
});

module.exports = Workout;