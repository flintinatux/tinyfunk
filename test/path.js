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

  it('returns undefined if part of the path is missing', () => {
    expect(path(['foo', 'bar'], undefined)).to.be.undefined
    expect(path(['bar', 'foo'], obj)).to.be.undefined
  })
})
