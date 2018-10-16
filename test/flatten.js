const { expect } = require('chai')

const { flatten } = require('..')

describe('flatten', () => {
  const arr = [ 1, [ 2, 3 ], [ 4, [ 5 ] ] ]

  it('recursively flattens an array', () =>
    expect(flatten(arr)).to.eql([ 1, 2, 3, 4, 5 ])
  )
})
