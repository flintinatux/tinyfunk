const { expect } = require('chai')

const { filter } = require('..')

describe('filter', () => {
  const even = num =>
    num % 2 === 0

  it('filters a list by a predicate', () =>
    expect(filter(even, [ 1, 2, 3, 4 ])).to.eql([ 2, 4 ])
  )

  it('is curried', () =>
    expect(filter(even)([ 1, 2, 3, 4 ])).to.eql([ 2, 4 ])
  )
})
