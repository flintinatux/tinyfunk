const { expect } = require('chai')

const { tail } = require('..')

describe('tail', () => {
  it('returns all but the first item of a list', () =>
    expect(tail([ 1, 2, 3 ])).to.eql([ 2, 3 ])
  )
})
