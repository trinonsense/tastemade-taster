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
				taster: this.getTemplate('taster-template')
			};
			this.layouts = {
				rate: this.getTemplate('rate-layout')
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
			var taster = this.templates.taster(tasters.at(0).toJSON());
			var content = this.layouts.rate({content: taster});

			this.$('.app-content').html(content);
		},

		getTemplate: function(template) {
			return _.template($('#' + template).html());
		}
	});

	return AppView;
});
