define([
	'backbone'
], function(
	Backbone
) {

	var Tasters = Backbone.Collection.extend({
		url: 'https://api.tmade.co/v1/nearby/videos?api_key=webdevtest'
	});

	return Tasters;
});
