const { expect } = require('chai')

const { add, thrush } = require('..')

describe('thrush', () => {
  it('accepts a value and function and executes the latter with the former', () =>
    expect(thrush(1, add(1))).to.equal(2)
  )

  it('is curried', () =>
    expect(thrush(1)(add(1))).to.equal(2)
  )
})
