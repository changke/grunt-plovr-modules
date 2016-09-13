goog.provide('pm.application');

goog.require('goog.module.ModuleLoader');
goog.require('goog.module.ModuleManager');

/**
 * @constructor
 */
pm.application = function() {
  this.moduleInstances = [];

  // external module loader
  this.moduleManager = goog.module.ModuleManager.getInstance();
  this.moduleLoader = new goog.module.ModuleLoader();

  this.moduleManager.setLoader(this.moduleLoader);
  this.moduleManager.setAllModuleInfo(goog.global['PLOVR_MODULE_INFO']);
  this.moduleManager.setModuleUris(goog.global['PLOVR_MODULE_URIS']);

  this.moduleManager.setLoaded('core');
};
goog.addSingletonGetter(pm.application);
goog.exportSymbol('pm.application', pm.application);

pm.application.prototype.registerModule = function(moduleName) {
  var self = this;

  var moduleClass = goog.getObjectByName('pm.modules.' + moduleName);

  if (moduleClass) {
    // core or loaded external modules
    var m = new moduleClass();
    this.moduleInstances.push(m);
    console.log('Module "' + m.getName() + '" initialized.');
  } else {
    // non-core / external modules to be loaded
    switch (moduleName) {
      case 'moduleone':
      case 'moduletwo':
      case 'modulethree':
        this.moduleManager.execOnLoad(moduleName, function() {
          self.registerModule(moduleName).startModule(moduleName);
        });
        break;
      default:
        // module not found, typo?
        console.log('Class not found for module "' + moduleName + '".');
    }
  }
  return this;
};

pm.application.prototype.start = function() {
  // call the start mothod of each initialized module
  for (var i = 0, len = this.moduleInstances.length; i < len; i++) {
    this.moduleInstances[i].start();
  }
};

/**
 * Start a module manually
 *
 * @param {String} moduleName Name of the module
 */
pm.application.prototype.startModule = function(moduleName) {
  for (var i = 0, len = this.moduleInstances.length; i < len; i++) {
    var mi = this.moduleInstances[i];
    if (mi.getName() === moduleName) {
      mi.start();
    }
  }
};
