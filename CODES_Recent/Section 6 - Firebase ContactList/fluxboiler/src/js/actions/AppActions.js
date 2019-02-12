var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	receiveItems: function(items){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECEIVE_ITEMS,
			items: items
		});
	}
}

module.exports = AppActions;