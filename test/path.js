const { expect } = require('chai')

const { path } = require('..')

describe('path', () => {
  const obj = { foo: { bar: 'baz' } }

  it('accesses a value at the tip of a path on an object', () =>
    expect(path(['foo', 'bar'], obj)).to.equal('baz')
  )

  it('is curried', () =>
    expect(path(['foo', 'bar'])(obj)).to.equal('baz')
  )
})
