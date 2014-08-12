define([
	'backbone'
], function(
	Backbone
) {

	var AppView = Backbone.View.extend({
		el: '.app',

		initialize: function() {
			this.collection.on('sync', this.render, this);
		},

		render: function(tasters) {
			var taster = tasters.at(0);

			this.$('.taster')
				.find('.data-thumbnail').attr('src', taster.get('thumbnail').url).end()
				.find('.data-venue').text(taster.get('venue').name).end()
				.find('.data-user').text(taster.get('creator').name).end()
				.find('.data-likers').text(taster.get('stats').likers).end()
				.find('.data-comments').text(taster.get('stats').comments).end()
				.find('.data-views').text(taster.get('stats').views).end();
		}
	});

	return AppView;
});
