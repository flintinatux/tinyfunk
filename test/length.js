const { expect } = require('chai')

const { length } = require('..')

describe('length', () => {
  const a = [1, 2, 3]

  it('returns the length of a list', () =>
    expect(length(a)).to.equal(3)
  )
})
