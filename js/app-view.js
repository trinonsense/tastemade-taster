define([
	'backbone', 'underscore', 'jquery'
], function(
	Backbone, _, $
) {

	_.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/g
	};

	var AppView = Backbone.View.extend({
		el: '.app',

		events: {
			'click .taster-video-player' : 'playPause'
		},

		initialize: function() {
			this.collection.on('sync', this.render, this);
			this.templates = {
				taster: _.template(this.getTemplate('taster-template'))
			};
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
			console.log(this.templates.taster(taster.toJSON()));
			debugger;

		},

		getTemplate: function(template) {
			return $('#' + template).html();
		}
	});

	return AppView;
});
