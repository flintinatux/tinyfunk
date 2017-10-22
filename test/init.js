const { expect } = require('chai')

const { init } = require('..')

describe('init', () => {
  it('returns all but the last element of a list', () =>
    expect(init([ 1, 2, 3 ])).to.eql([ 1, 2 ])
  )
})
