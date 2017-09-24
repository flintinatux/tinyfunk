const { expect } = require('chai')

const { add, flip } = require('..')

describe('flip', () => {
  it('flips and curries the first two args of a function', () => {
    expect(flip(add)('a', 'b')).to.equal('ba')
    expect(flip(add)('a')('b')).to.equal('ba')
  })
})
