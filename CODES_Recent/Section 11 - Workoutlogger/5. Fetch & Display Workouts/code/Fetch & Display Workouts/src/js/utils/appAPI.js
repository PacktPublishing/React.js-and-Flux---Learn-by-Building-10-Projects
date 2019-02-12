var AppActions = require('../actions/AppActions');

module.exports = {
	addWorkout: function(workout){
		console.log('Saving Workout...');
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		workouts.push(workout);
		localStorage.setItem('workouts', JSON.stringify(workouts));
	},
	getWorkouts: function(){
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		AppActions.receiveWorkouts(workouts);
	}
}