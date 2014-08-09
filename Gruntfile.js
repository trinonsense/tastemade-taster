/* global module:true */

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			dev: {
				files: [
					'*.html',
					'scss/**/*.scss',
					'js/**/*.js'
				],
				tasks: ['jshint', 'compass:dev'],
				options: {
					// livereload: true
					atBegin: true
				}
			}
		},

		compass: {
			options: {
				sassDir: 'scss',
				cssDir: 'css',
				importPath: ['./']
			},
			dev: {
				options: {
					outputStyle: 'expanded',
				}
			},
			prod: {
				options: {
					outputStyle: 'compressed',
					environment: 'production',
					force: true
				}
			}
		},

		jshint: {
			src: ['Gruntfile.js', 'js/**/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		requirejs: {
			compile: {
				options: {
					baseUrl: 'js/',
					mainConfigFile: 'js/require-config.js',
					// optimize: 'none',
					name: 'require-config',
					insertRequire: ['require-config'],
					include: ['../bower_components/requirejs/require'],
					out: 'js/main.min.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
};
