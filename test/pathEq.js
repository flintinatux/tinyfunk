const { expect } = require('chai')

const { pathEq } = require('..')

describe('pathEq', () => {
  const obj = { foo: { bar: 'yes' } }

  it('tests if a nested path is identically equal to a value', () => {
    expect(pathEq(['foo', 'bar'], 'yes', obj)).to.be.true
    expect(pathEq(['foo', 'bar'], 'no', obj)).to.be.false
  })

  it('does not fail if the path is missing', () =>
    expect(pathEq(['bar', 'foo'], 'yes', obj)).to.be.false
  )

  it('is curried', () => {
    expect(pathEq(['foo', 'bar'])('yes', obj)).to.be.true
    expect(pathEq(['foo', 'bar'], 'yes')(obj)).to.be.true
    expect(pathEq(['foo', 'bar'])('yes')(obj)).to.be.true
  })
})
