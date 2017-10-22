const { expect } = require('chai')

const { add, multiply, useWith } = require('..')

describe('useWith', () => {
  it('transforms args before passing to original function', () =>
    expect(useWith(multiply, [ add(1), add(2) ])(1, 1)).to.equal(6)
  )

  it('is curried', () =>
    expect(useWith(multiply)([ add(1), add(2) ])(1, 1)).to.equal(6)
  )
})
