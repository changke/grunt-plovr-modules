goog.provide('pm.modules.core');

goog.require('pm.module');

/**
 * @constructor
 * @extends {pm.module}
 */
pm.modules.core = function() {
  goog.base(this);
  this.name = 'core';
};
goog.inherits(pm.modules.core, pm.module);
goog.exportSymbol('pm.modules.core', pm.modules.core);

pm.modules.core.prototype.start = function() {
  console.log('Hello from ' + this.name + '.');
};
