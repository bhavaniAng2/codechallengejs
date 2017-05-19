module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-karma');
  require('time-grunt')(grunt);

  grunt.initConfig({
    jshint: {
      files: ['app.js', 'app.test.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    karma: {
        unit: {
            // Ref to this config
            configFile: 'karma.conf.js'
        }
    }
  });

  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', ['karma:unit']);

};