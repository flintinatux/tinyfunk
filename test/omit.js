const { expect } = require('chai')

const { omit } = require('..')

describe('omit', () => {
  const orig = { a: 'a', b: 'b', c: 'c' }

  it('omits certain properties from an object', () =>
    expect(omit([ 'a', 'b' ], orig)).to.eql({ c: 'c' })
  )

  it('is curried', () =>
    expect(omit([ 'a', 'b' ])(orig)).to.eql({ c: 'c' })
  )
})
