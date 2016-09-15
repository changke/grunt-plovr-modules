'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.plovr_modules = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  mode_simple: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('test/plovr-config-simple.json');
    var expected = grunt.file.readJSON('test/expected/modules.json');

    test.equal(actual.mode, 'SIMPLE', 'mode should be "SIMPLE".');

    test.done();
  },
  mode_advanced: function(test) {
    test.expect(1);

    var actual = grunt.file.readJSON('test/plovr-config-advanced.json');
    var expected = grunt.file.readJSON('test/expected/modules.json');

    test.equal(actual.mode, 'ADVANCED', 'mode should be "ADVANCED".');

    test.done();
  },
};
