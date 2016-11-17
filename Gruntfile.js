module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all : ['Gruntfile.js', 'app/scripts/**/*js']
    },
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'app',
          keepalive: true,
          open: {
            target: 'http://localhost:8080'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['jshint', 'connect']);
};
