define([
	'underscore',
	'backbone',
	'app',
	'helpers',
], function(
	_,
	Backbone,
	app,
	Helpers
) {

	var Router = Backbone.Router.extend({
		routes: {
			'(/)': 'index'
		},

		//
		// Route Handlers
		//
		index: function() {

		}
	});

	return Router;
});
