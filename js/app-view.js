define([
	'backbone'
], function(
	Backbone
) {

	var AppView = Backbone.View.extend({
		el: '.app',

		initialize: function() {
			this.collection.on('sync', function(tasters) {
				this.$('.taster img').attr('src', tasters.at(0).get('thumbnail').url);
			}, this);
		}
	});

	return AppView;
});
