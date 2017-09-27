const { expect } = require('chai')

const { prepend } = require('..')

describe('prepend', () => {
  const list = [ 1, 2, 3 ]

  it('appends an element to a list', () =>
    expect(prepend(0, list)).to.eql([ 0, 1, 2, 3 ])
  )

  it('is curried', () =>
    expect(prepend(0)(list)).to.eql([ 0, 1, 2, 3 ])
  )
})
