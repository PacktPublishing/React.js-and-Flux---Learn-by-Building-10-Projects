var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var SearchForm = React.createClass({
	render: function(){
		return(
			<div>
				<form onSubmit={this.searchText} className="well">
					<div className="form-group">
						<label>Search For Something...</label>
						<input type="text" className="form-control" ref="text" />
					</div>
				</form>
			</div>
		);
	},

});

module.exports = SearchForm;