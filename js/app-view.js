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
			'click .rate-button-bg' : 'rateTaster',
			'transitionend .taster:first-child' : 'removeTaster'
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
			var video = this.getCurrentTaster().find('.taster-video')[0];

			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}

			this.getCurrentTaster().find('.taster-video-player').toggleClass('is-paused');
		},

		rateTaster: function(e) {
			if ($(e.currentTarget).hasClass('rate-like')) {
				this.getCurrentTaster().addClass('taster-liked')
					.find('.taster-like').css('opacity', 1).end();

			} else {
				this.getCurrentTaster().addClass('taster-noped')
					.find('.taster-nope').css('opacity', 1);
			}
		},

		removeTaster: function(e) {
			if (e.originalEvent.propertyName === 'transform') {
				this.getCurrentTaster().remove();
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

		getCurrentTaster: function() {
			return this.$('.taster:first-child');
		},

		getTemplate: function(template) {
			return _.template($('#' + template).html());
		}
	});

	return AppView;
});
