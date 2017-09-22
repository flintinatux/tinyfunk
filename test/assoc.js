const { expect } = require('chai')

const { assoc } = require('..')

describe('assoc', () => {
  it('sets a property on an obj to a value', () =>
    expect(assoc('foo', 'bar', {})).to.eql({ foo: 'bar' })
  )

  it('is curried', () => {
    expect(assoc('foo')('bar', {})).to.eql({ foo: 'bar' })
    expect(assoc('foo', 'bar')({})).to.eql({ foo: 'bar' })
  })
})
