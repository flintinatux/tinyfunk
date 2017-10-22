const { expect } = require('chai')

const { join } = require('..')

describe('join', () => {
  it('joins a list by a separator', () =>
    expect(join(',', [ 1, 2, 3 ])).to.equal('1,2,3')
  )

  it('is curried', () =>
    expect(join(',')([ 1, 2, 3 ])).to.equal('1,2,3')
  )
})
