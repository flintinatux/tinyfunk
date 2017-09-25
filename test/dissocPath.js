const { expect } = require('chai')

const { dissocPath } = require('..')

describe('dissocPath', () => {
  const orig = { foo: { bar: 'baz' } }

  it('removes a value from the tip of a path on a nested object', () =>
    expect(dissocPath(['foo', 'bar'], orig)).to.eql({ foo: { } })
  )

  it('returns object unharmed if path is empty', () =>
    expect(dissocPath([], orig)).to.eql(orig)
  )

  it('returns object unharmed if nothing at that path', () =>
    expect(dissocPath(['blah'], orig)).to.eql(orig)
  )

  it('is curried', () =>
    expect(dissocPath(['foo', 'bar'])(orig)).to.eql({ foo: { } })
  )
})
