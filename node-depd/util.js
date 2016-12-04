const deprecate = require('depd')('Util');

module.exports = {
  sum: function sum(a, b) {
    deprecate('util.sum(a, b): Use util.add(a, b, ...) instead');
    return a + b;
  },

  substruct: function substruct(a, b) {
    deprecate('util.substruct(a, b): Use util.sub(a, b) instead');
    return b - a;
  }
};
