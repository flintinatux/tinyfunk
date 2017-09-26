const { expect } = require('chai')

const { append } = require('..')

describe('append', () => {
  const list = [ 1, 2, 3 ]

  it('appends an element to a list', () =>
    expect(append(4, list)).to.eql([ 1, 2, 3, 4 ])
  )

  it('is curried', () =>
    expect(append(4)(list)).to.eql([ 1, 2, 3, 4 ])
  )
})
