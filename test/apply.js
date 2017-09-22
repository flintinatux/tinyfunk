const { expect } = require('chai')

const { apply } = require('..')

describe('apply', () => {
  const f = (a, b) => a + b

  it('applies a list of args to a function', () =>
    expect(apply(f, [1, 2])).to.equal(3)
  )

  it('is curried', () =>
    expect(apply(f)([1, 2])).to.equal(3)
  )
})
