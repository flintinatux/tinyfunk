const { expect } = require('chai')

const { last } = require('..')

describe('last', () => {
  it('returns the last item of a list', () =>
    expect(last([ 1, 2, 3 ])).to.equal(3)
  )
})
