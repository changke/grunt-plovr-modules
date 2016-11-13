# grunt-plovr-modules

> Grunt wrapper for plovr with focus on creating modules.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-plovr-modules --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-plovr-modules');
```

## The "plovr_modules" task

### Overview
In your project's Gruntfile, add a section named `plovr_modules` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  plovr_modules: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options
The most standard plovr options (except "modules") can be used identically as in [plovr's configuration](http://plovr.com/options.html).

#### options.MODULE_CONFIG
Type: `Object`

##### options.MODULE_CONFIG.entry
Type: `String`

Path of the file that contains the entry point of your JavaScript application.

##### options.MODULE_CONFIG.allModuleFiles
Type: `String`

Path of the all the JS files (incl. external module files), use globbing patterns. Files that are NOT present in external module definitions will form a "core" module which all external modules depend on.

##### options.MODULE_CONFIG.modules
Type `Array`

An array contains definitions of external modules. Each module definition is an object:
```js
{
  name: 'module_name',
  files: 'module files in globbing pattern'
  deps: ['core'] // "core" is the default dependency
}
```

### Usage Examples
Please refer to [the Gruntfile](https://github.com/changke/grunt-plovr-modules/blob/master/Gruntfile.js) of this project.

## Credit
Initial idea and code by [Michael](https://github.com/ITspirit/grunt-plovr-extended).

## Release History
* **v0.1.0** First working version.
