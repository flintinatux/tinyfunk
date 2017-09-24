const { expect } = require('chai')

const { multiply } = require('..')

describe('multiply', () => {
  it('multiplies two numbers', () =>
    expect(multiply(2, 3)).to.equal(6)
  )

  it('is curried', () =>
    expect(multiply(2)(3)).to.equal(6)
  )
})
