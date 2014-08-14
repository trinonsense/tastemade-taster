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
			'click .taster-video-player' : 'playPause',
			'click .rate-button-bg' : 'rate'
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

		rate: function(e) {
			// this.$('.taster').first().remove();
			if ($(e.currentTarget).hasClass('rate-like')) {
				this.$('.taster:first-child .taster-like').css('opacity', 1);

			} else {
				this.$('.taster:first-child .taster-nope').css('opacity', 1);
			}
		},

		render: function(tasters) {
			var content, tastersHTML = '',
				tastersJSON = tasters.toJSON();

			for (var i = 0; i < tastersJSON.length; i++) {
				tastersHTML += this.templates.taster(tastersJSON[i]);
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
