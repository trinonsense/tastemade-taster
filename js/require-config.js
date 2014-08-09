var appVersion = '0.0.0';

require.config({
	enforceDefine: true,
	baseUrl: 'js',
	urlArgs: 'v=' + appVersion,
	paths: {
		jquery: '../bower_components/jquery/dist/jquery',
		backbone: '../bower_components/backbone/backbone',
		underscore: '../bower_components/underscore/underscore',
		modernizr: '../bower_components/modernizr/modernizr',
		domReady: '../bower_components/requirejs-domready/domReady',
	},
	shim: {
		modernizr: {
			exports: 'Modernizr'
		}
	}
});

define([
	'domReady',
	'main',
	'modernizr'
], function(
	domReady,
	main
) {

	domReady(function whenDOMIsReady() {
		main.run();
	});
});
