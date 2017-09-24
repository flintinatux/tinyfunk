const { expect } = require('chai')

const { add, juxt, multiply } = require('..')

describe('juxt', () => {
  it('creates a new function that branches an arg over multiple functions', () =>
    expect(juxt([ add(1), multiply(2) ], 2)).to.eql([ 3, 4 ])
  )

  it('is curried', () =>
    expect(juxt([ add(1), multiply(2) ])(2)).to.eql([ 3, 4 ])
  )
})
