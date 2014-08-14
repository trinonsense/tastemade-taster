define([
	'backbone', 'app'
], function(
	Backbone, app
) {

	var Router = Backbone.Router.extend({
		routes: {
			'(/)': 'index'
		},

		//
		// Route Handlers
		//
		index: function() {
			if ('geolocation' in navigator) {
				navigator.geolocation.getCurrentPosition(
					function(pos) { // success
						app.tasters.fetch({
							data : {
								lat: pos.coords.latitude,
								long: pos.coords.longitude
							}
						});

					}, function(err) { // error
						console.log(err.message);

					}, {timeout: 5000});
			}
		}
	});

	return Router;
});
