module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-karma');

  grunt.initConfig({
    karma: {
        unit: {
            // Ref to this config
            configFile: 'karma.conf.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', ['karma:unit']);

};
