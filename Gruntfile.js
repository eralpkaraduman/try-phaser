var webpack = require('webpack');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      game: {
        entry: "./game/main",
        output: {
          path: 'public/',
          filename: 'bin/bundle.js'
        }
      }
    },
    watch: {
			game: {
				files: [
          "game/**/*.js"
        ],
				tasks: ["webpack"],
				options: {
					spawn: false,
				}
			}
		},
    jshint: {
      all : [
        'Gruntfile.js',
        'public/**/*js',
        'server/**/*js',
        '!public/bin/**'
      ]
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/phaser/build',
            src: 'phaser.*',
            dest: 'public/bin'
          }
        ]
      }
    },
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'public',
          keepalive: false,
          open: {
            target: 'http://localhost:8080'
          },
          onCreateServer: function() {
            var boot = require('./server/server.js');
            boot(grunt);
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['copy', 'webpack', 'jshint', 'connect', 'watch']);
};
