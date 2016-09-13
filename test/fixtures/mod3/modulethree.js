goog.provide('pm.modules.modulethree');

goog.require('pm.module');

/**
 * @constructor
 * @extends {pm.module}
 */
pm.modules.modulethree = function() {
  goog.base(this);
  this.name = 'modulethree';
};
goog.inherits(pm.modules.modulethree, pm.module);
goog.exportSymbol('pm.modules.modulethree', pm.modules.modulethree);

pm.modules.modulethree.prototype.start = function() {
  console.log('Hello from ' + this.name + '.');
};

// External module finished loading
goog.module.ModuleManager.getInstance().setLoaded('modulethree');
