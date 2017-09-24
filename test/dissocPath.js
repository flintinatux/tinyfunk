const { expect } = require('chai')

const { dissocPath } = require('..')

describe('dissocPath', () => {
  it('removes a value from the tip of a path on a nested object', () =>
    expect(dissocPath(['foo', 'bar'], { foo: { bar: 'baz' } }))
      .to.eql({ foo: { } })
  )

  it('is curried', () =>
    expect(dissocPath(['foo', 'bar'])({ foo: { bar: 'baz' } }))
      .to.eql({ foo: { } })
  )
})
