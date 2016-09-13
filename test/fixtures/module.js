goog.provide('pm.module');

/**
 * @constructor
 */
pm.module = function() {
  this.name = 'module';
};

/**
 * Get name
 *
 * @returns {String} The name of this module
 */
pm.module.prototype.getName = function() {
  return this.name;
};
