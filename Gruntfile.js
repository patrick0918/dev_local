// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the confisguration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here
    // configure uglify to minify js files -------------------------------------
    uglify: {
      dist: {
        files: {'dist/js/app.min.js': 'dist/js/app.js'}
      }
    },
    concat: {
      dev: {
        files: {
          'dist/js/functions.js': ['src/js/functions.js'],
          'dist/js/application.js': ['bower_components/jquery/dist/jquery.js','bower_components/what-input/what-input.js','bower_components/foundation-sites/dist/foundation.js']
        }
      },
      dist:{
        files: {
          'dist/js/app.js': ['bower_components/jquery/dist/jquery.js','bower_components/what-input/what-input.js','bower_components/foundation-sites/dist/foundation.js','src/js/functions.js']
        }
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: ['src/scss'],
          cssDir: ['dist/css'],
          config: 'config/config.rb'
        }
      },
      dist: {
        options: {
          sassDir: ['src/scss'],
          cssDir: ['dist/css'],
          environment: 'production',
          config: 'config/config.rb'
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions', 'ie >= 9', 'and_chr >= 2.3']
          })
        ]
      },
      dist: {
        src: 'dist/css/*.css'
      }
    },
    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      dist: {
        files: {
          'dist/css/custom.min.css': 'dist/css/custom.css'
        }
      }
    },
    watch: {
      css: {
        files: 'src/scss/*.scss',
        tasks: ['compass:dev','postcss']
      },
      js: {
        files: 'src/js/*.js',
        tasks: ['concat:dev']
      }
    }
  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', ['compass:dev','postcss','concat:dev']);
  grunt.registerTask('watch-dev', ['watch']);
  grunt.registerTask('live', ['compass:dist','postcss','cssmin:dist','concat:dist','uglify:dist']);

};


