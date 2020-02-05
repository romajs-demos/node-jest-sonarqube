const foo = require('./foo');

describe('root spec', () => {
  it('Should return expected value', () => {
    expect(foo()).toEqual('foo');
  });
})
;
