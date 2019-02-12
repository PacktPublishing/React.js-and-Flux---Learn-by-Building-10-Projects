var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Workout = require('./Workout.js');

var Workouts = React.createClass({
	render: function(){
		return(
			<ul className="list-group">
				{
					this.props.workouts.map(function(workout, i){
						return(
							<Workout workout={workout} key={i} />
						)
					})
				}
			</ul>
		);
	}
	
});

module.exports = Workouts;