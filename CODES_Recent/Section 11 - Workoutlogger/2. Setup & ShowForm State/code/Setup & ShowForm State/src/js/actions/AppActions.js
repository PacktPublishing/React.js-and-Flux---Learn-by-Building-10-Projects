var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	showForm: function(){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SHOW_FORM
		});
	},
	addWorkout: function(workout){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_WORKOUT,
			workout: workout
		});
	}
}

module.exports = AppActions;