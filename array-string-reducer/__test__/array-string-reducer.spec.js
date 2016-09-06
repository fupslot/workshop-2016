const stringReducer = require('../');
describe('array-string-reducer', function() {
  it('should pass', function() {
    expect(stringReducer('bcvvvar')).toEqual('abcrv');
  });
});
