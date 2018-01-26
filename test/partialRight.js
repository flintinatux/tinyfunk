const { expect } = require('chai')

const { partialRight } = require('..')

describe('partialRight', () => {
  const maths = (a, b, c, d) =>
    a + b * c + d

  it('partially applies right-side args to a function', () =>
    expect(partialRight(maths, [ 1, 2 ])(3, 4)).to.equal(9)
  )

  it('is curried', () =>
    expect(partialRight(maths)([ 1, 2 ])(3, 4)).to.equal(9)
  )
})
