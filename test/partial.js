const { expect } = require('chai')

const { partial } = require('..')

describe('partial', () => {
  const sum = (a, b, c, d) =>
    a + b + c + d

  it('partially applies args to a function', () =>
    expect(partial(sum, [ 1, 2 ])(3, 4)).to.equal(10)
  )

  it('is curried', () =>
    expect(partial(sum)([ 1, 2 ])(3, 4)).to.equal(10)
  )
})
