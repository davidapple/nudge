module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ["dist/css"]
        },
        files: {"dist/css/style.css": "less/style.less"}
      },
      production: {
        options: {
          paths: ["dist/css"],
          cleancss: true
        },
        files: {"dist/css/style.css": "less/style.less"}
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      scripts: {
        files: ['**/*.less'],
        tasks: ['default'],
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['less', 'cssmin']);
};