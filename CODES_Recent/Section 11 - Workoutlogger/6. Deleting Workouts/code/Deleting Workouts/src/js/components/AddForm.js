var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var AddForm = React.createClass({
	render: function(){
		return(
			<form onSubmit={this.onSubmit}>
				<div className="form-group">
					<select className="form-control" ref="type">
						<option value="Jogging">Jogging</option>
						<option value="Weight Lifting">Weight Lifting</option>
						<option value="Elliptical">Elliptical</option>
						<option value="Yoga">Yoga</option>
						<option value="other">Other</option>
					</select>
				</div>
				<div className="form-group">
					<input type="text" className="form-control" ref="minutes" placeholder="Minutes" />
				</div>	
				<div className="form-group">
					<input type="text" className="form-control" ref="miles" placeholder="Miles (Optional)" />
				</div>	
				<button type="submit" className="btn btn-default btn-block">Log Workout</button>
			</form>
		);
	},

	onSubmit: function(e){
		e.preventDefault();

		var workout = {
			id: this.generateId(),
			type: this.refs.type.value.trim(),
			minutes: this.refs.minutes.value.trim(),
			miles: this.refs.miles.value.trim(),
			date: new Date()
		}

		AppActions.addWorkout(workout);
	},

	generateId: function(){
		var id = '';
		var possible = '0123456789';

		for(var i = 0; i < 5; i++){
			id += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		return id;
	}
	
});

module.exports = AddForm;