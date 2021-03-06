const { expect } = require('chai')

const { pick } = require('..')

describe('pick', () => {
  const orig = { a: 'a', b: 'b', c: 'c' }

  it('picks certain properties from an object', () =>
    expect(pick([ 'a', 'b' ], orig)).to.eql({ a: 'a', b: 'b' })
  )

  it('is curried', () =>
    expect(pick([ 'a', 'b' ])(orig)).to.eql({ a: 'a', b: 'b' })
  )

  it('does not include a picked key if val is undefined', () =>
    expect(pick([ 'a', 'd' ], orig)).to.eql({ a: 'a' })
  )
})
