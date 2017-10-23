const { expect } = require('chai')

const { not } = require('..')

describe('not', () => {
  it('negates its first argument', () => {
    expect(not(true)).to.be.false
    expect(not(false)).to.be.true
  })
})
