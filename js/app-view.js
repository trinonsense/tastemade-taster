define([
	'backbone', 'underscore', 'jquery'
], function(
	Backbone, _, $
) {

	_.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/g
	};

	var AppView = Backbone.View.extend({
		el: '.app-content',

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
			var content, tastersHTML = '';

			for (var i = 0; i < 3; i++) {
				tastersHTML += this.templates.taster(tasters.at(i).toJSON());
			}

			content = this.layouts.rate({tasters: tastersHTML});

			this.$el.html(content);
		},

		getTemplate: function(template) {
			return _.template($('#' + template).html());
		}
	});

	return AppView;
});
