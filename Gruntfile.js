module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all : [
        'Gruntfile.js',
        'public/**/*js',
        'server/**/*js',
        '!public/lib/**'
      ]
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/phaser/build',
            src: 'phaser.min.js',
            dest: 'public/lib'
          }
        ]
      }
    },
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'public',
          keepalive: true,
          open: {
            target: 'http://localhost:8080'
          },
          onCreateServer: function() {
            var boot = require('./server/boot.js');
            boot(grunt);
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['copy','jshint', 'connect']);
};
