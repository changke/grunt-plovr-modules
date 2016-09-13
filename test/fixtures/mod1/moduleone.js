goog.provide('pm.modules.moduleone');

goog.require('pm.module');

/**
 * @constructor
 * @extends {pm.module}
 */
pm.modules.moduleone = function() {
  goog.base(this);
  this.name = 'moduleone';
};
goog.inherits(pm.modules.moduleone, pm.module);
goog.exportSymbol('pm.modules.moduleone', pm.modules.moduleone);

pm.modules.moduleone.prototype.start = function() {
  console.log('Hello from ' + this.name + '.');
};

// External module finished loading
goog.module.ModuleManager.getInstance().setLoaded('moduleone');
