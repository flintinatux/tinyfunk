const { expect } = require('chai')

const { assocPath } = require('..')

describe('assocPath', () => {
  it('sets a value on a path of a nested object', () =>
    expect(assocPath(['foo', 'bar'], 'baz', {})).to.eql({ foo: { bar: 'baz' } })
  )

  it('is curried', () => {
    expect(assocPath(['foo', 'bar'])('baz', {})).to.eql({ foo: { bar: 'baz' } })
    expect(assocPath(['foo', 'bar'], 'baz')({})).to.eql({ foo: { bar: 'baz' } })
  })
})
