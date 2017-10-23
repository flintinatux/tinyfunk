const { expect } = require('chai')

const { head } = require('..')

describe('head', () => {
  it('returns the head of a list', () =>
    expect(head([ 1, 2, 3 ])).to.equal(1)
  )
})
