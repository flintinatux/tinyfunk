const { expect } = require('chai')

const { partialRight } = require('..')

describe('partialRight', () => {
  const sum = (a, b, c, d) =>
    a + b * c + d

  it('partially applies right-side args to a function', () =>
    expect(partialRight(sum, [ 1, 2 ])(3, 4)).to.equal(9)
  )

  it('is curried', () =>
    expect(partialRight(sum)([ 1, 2 ])(3, 4)).to.equal(9)
  )
})
