module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['dist/css']
        },
        files: {'dist/css/nudge.css': 'less/nudge.less'}
      },
      production: {
        options: {
          paths: ['dist/css'],
          cleancss: true
        },
        files: {'dist/css/nudge.css': 'less/nudge.less'}
      }
    },
    lessToSass: {
      convert: {
        files: [{
          expand: true,
          cwd: 'less',
          src: ['*.less'],
          ext: '.scss',
          dest: 'sass'
        }],
        options: {
          replacements: [{
            pattern: /(\s+)\.([\w\-]*)\s*\((.*)\);/gi,
            replacement: '$1@include $2($3)',
            order: 2
          }]
        }
      }
    },
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: /~''/g,
              replacement: 'null'
            }
          ]
        },
        files: [{
          expand: true,
          flatten: true,
          src: ['sass/*.scss'],
          dest: 'sass/'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded',
          noCache: true
        },
        files: {
          'dist/css/nudge.css': 'sass/nudge.scss'
        }
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
  grunt.loadNpmTasks('grunt-less-to-sass');
  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('doLess', 'less');
  grunt.registerTask('doConvert', ['lessToSass', 'replace']);
  grunt.registerTask('doSass', 'sass');
  grunt.registerTask('doMin', 'cssmin');
  grunt.registerTask('default', ['less', 'lessToSass', 'replace', 'sass', 'cssmin']);
};