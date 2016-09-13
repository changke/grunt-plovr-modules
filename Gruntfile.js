/*
 * grunt-plovr-modules
 * https://github.com/changke/grunt-plovr-modules
 *
 * Copyright (c) 2016 changke
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp', './test/*.min.js']
    },

    // Configuration to be run (and then tested).
    plovr_modules: {
      options: {
        id: 'pm',
        paths: './test/fixtures',
        mode: 'SIMPLE', // RAW|WHITESPACE|SIMPLE|ADVANCED
        level: 'DEFAULT', // QUIET|DEFAULT|VERBOSE
        define: {
          'goog.DEBUG': false
        },
        // modules
        'module-output-path': './test/pm.%s.min.js',
        'module-production-uri': 'pm.%s.min.js',
        'global-scope-name': '__pm__',

        MODULE_CONFIG: {
          entry: './test/fixtures/entry.js',
          allModuleFiles: './test/fixtures/*/*.{js,soy}',
          modules: [
            {
              name: 'moduleone',
              files: './test/fixtures/mod1/*.{js,soy}',
              deps: ['core']
            },
            {
              name: 'moduletwo',
              files: './test/fixtures/mod2/*.{js,soy}',
              deps: ['core']
            },
            {
              name: 'modulethree',
              files: './test/fixtures/mod3/*.{js,soy}',
              deps: ['core']
            }
          ]
        }
      },

      mode_simple: {
        options: {},
        src: [null],
        dest: './test/plovr-config-simple.json'
      },

      mode_advanced: {
        options: {
          mode: 'ADVANCED'
        },
        src: [null],
        dest: './test/plovr-config-advanced.json'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'plovr_modules']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
