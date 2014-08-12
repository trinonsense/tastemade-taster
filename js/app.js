define([
	'tasters', 'app-view'
], function(
	Tasters, AppView
) {

	var app = {};
	app.tasters = new Tasters();
	app.view = new AppView({collection: app.tasters});

	return app;
});
