const { expect } = require('chai')

const { add, map } = require('..')

describe('map', () => {
  const functor = [ 1, 2 ]

  it('maps a function over a functor', () =>
    expect(map(add(1), functor)).to.eql([ 2, 3 ])
  )

  it('is curried', () =>
    expect(map(add(1))(functor)).to.eql([ 2, 3 ])
  )
})
