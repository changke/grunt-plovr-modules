/*
 * grunt-plovr-modules
 * https://github.com/changke/grunt-plovr-modules
 *
 * Copyright (c) 2016 changke
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  var shell = require('shelljs');
  var configFilename = 'plovr-config.json';

  grunt.registerMultiTask('plovr_modules', 'Creating and executing plovr config file.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});
    var moduleConfig = options.MODULE_CONFIG;
    var nonCoreModules = moduleConfig.modules;

    delete options.MODULE_CONFIG;

    var generateModuleParts = function() {
      // placeholder for the "modules" parameter to be sent to plovr
      var plovrModules = {
        core: {
          inputs: [
            moduleConfig.entry
          ],
          deps: []
        }
      };

      // core module filter, initially just include all module files
      var coreModuleFiles = [moduleConfig.allModuleFiles];

      nonCoreModules.forEach(function(m) {
        coreModuleFiles.push('!' + m.files); // exclude from core
        var mf = grunt.file.expand(m.files);
        plovrModules[m.name] = {
          inputs: mf,
          deps: m.deps
        };
      });
      // complete core modules
      var coref = grunt.file.expand(coreModuleFiles);
      for (var i = 0, cl = coref.length; i < cl; i++) {
        plovrModules.core.inputs.push(coref[i]);
      }

      return plovrModules;
    };

    options['modules'] = generateModuleParts();

    var targetContent = JSON.stringify(options, null, 2);

    grunt.file.write(configFilename, targetContent);

    // write to dest files for testing purpose
    this.files.forEach(function(f) {
      grunt.file.write(f.dest, targetContent);
    });

    var cmd = 'java -jar ' + __dirname + '/../bin/plovr.jar build ' + configFilename;
    var r = shell.exec(cmd);

    grunt.file.delete(configFilename);

    if (r.code !== 0) {
      grunt.fail.warn(r.stderr);
    }
  });

};
