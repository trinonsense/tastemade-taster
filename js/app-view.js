define([
	'backbone'
], function(
	Backbone
) {

	var AppView = Backbone.View.extend({
		el: '.app',

		events: {
			'click .taster-video-player' : 'playPause'
		},

		initialize: function() {
			this.collection.on('sync', this.render, this);
		},

		playPause: function() {
			var video = this.$('.taster-video')[0];

			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}

			this.$('.taster-video-player').toggleClass('is-paused');
		},

		render: function(tasters) {
			var taster = tasters.at(0);

			this.$('.taster')
				.find('.data-venue').text(taster.get('venue').name).end()
				.find('.data-user').text(taster.get('creator').name).end()
				.find('.data-likers').text(taster.get('stats').likers).end()
				.find('.data-comments').text(taster.get('stats').comments).end()
				.find('.data-views').text(taster.get('stats').views).end()
				.find('.data-video').attr({
					poster: taster.get('thumbnail').url,
					src: taster.get('video').url
				});
		}
	});

	return AppView;
});
