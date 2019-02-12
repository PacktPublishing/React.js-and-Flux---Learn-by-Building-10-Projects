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
	},
	removeWorkout: function(workoutId){
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		for(var i = 0;i < workouts.length; i++){
			if(workouts[i].id == workoutId){
				workouts.splice(i, 1);
			}
		}
		localStorage.setItem('workouts', JSON.stringify(workouts));
	}
}