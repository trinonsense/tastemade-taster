define([
	'underscore', 'backbone',
	'router', 'app'
], function(
	_, Backbone,
	Router, app
) {

	var main = {
		run: function() {
			app.Router = new Router();
			Backbone.history.start();
			app.alreadyStarted = true;
		},
	};

	return main;
});
