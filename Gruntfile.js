module.exports = function(grunt) {

  grunt.initConfig({
    wiredep: {
      target: {
        src: 'public/index.html' // point to your HTML file.
      }
    }
  });

  grunt.loadNpmTasks('grunt-wiredep');

  grunt.registerTask('default', ['jshint']);

};
