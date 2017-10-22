const { expect } = require('chai')

const { sort } = require('..')

describe('sort', () => {
  const desc = (a, b) =>
    a < b ? 1 : b < a ? -1 : 0

  const list = [ 1, 2, 3, 4 ]

  it('sorts a list by a comparator', () =>
    expect(sort(desc, list)).to.eql([ 4, 3, 2, 1 ])
  )

  it('is curried', () =>
    expect(sort(desc)(list)).to.eql([ 4, 3, 2, 1 ])
  )
})
