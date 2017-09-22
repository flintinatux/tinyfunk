const { expect } = require('chai')

const { add } = require('..')

describe('add', () => {
  it('adds two numbers', () =>
    expect(add(1, 2)).to.equal(3)
  )

  it('is curried', () =>
    expect(add(1)(2)).to.equal(3)
  )
})
