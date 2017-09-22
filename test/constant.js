const { expect } = require('chai')

const { constant } = require('..')

describe('constant', () => {
  const f = constant('a')

  it('creates a function that returns the same value regardless of input', () => {
    expect(f()).to.equal('a')
    expect(f(1)).to.equal('a')
    expect(f(2)).to.equal('a')
  })
})
