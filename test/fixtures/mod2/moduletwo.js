goog.provide('pm.modules.moduletwo');

goog.require('pm.module');

/**
 * @constructor
 * @extends {pm.module}
 */
pm.modules.moduletwo = function() {
  goog.base(this);
  this.name = 'moduletwo';
};
goog.inherits(pm.modules.moduletwo, pm.module);
goog.exportSymbol('pm.modules.moduletwo', pm.modules.moduletwo);

pm.modules.moduletwo.prototype.start = function() {
  console.log('Hello from ' + this.name + '.');
};

// External module finished loading
goog.module.ModuleManager.getInstance().setLoaded('moduletwo');
