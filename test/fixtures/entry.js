goog.provide('entry');

goog.require('pm.application');

pm.start = function() {
  try {
    var app = pm.application.getInstance();

    app.registerModule('core');
    app.registerModule('moduleone');
    app.registerModule('moduletwo');
    app.registerModule('modulethree');

    app.start();
  } catch (e) {
    console.error('Somerhing went wrong: ' + e);
  }
};
goog.exportSymbol('pm.start', pm.start);
