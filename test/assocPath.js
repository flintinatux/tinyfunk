const { expect } = require('chai')

const { assocPath } = require('..')

describe('assocPath', () => {
  it('sets a value on a path of a nested object', () =>
    expect(assocPath(['foo', 'bar', 'bat'], 'baz', {}))
      .to.eql({ foo: { bar: { bat: 'baz' } } })
  )

  it('is curried', () => {
    expect(assocPath(['foo', 'bar', 'bat'])('baz', {}))
      .to.eql({ foo: { bar: { bat: 'baz' } } })
    expect(assocPath(['foo', 'bar', 'bat'], 'baz')({}))
      .to.eql({ foo: { bar: { bat: 'baz' } } })
  })
})
