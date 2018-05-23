const { expect } = require('chai')

const { propEq } = require('..')

describe('propEq', () => {
  const obj = { foo: 'bar' }

  it('tests that a certain property equals a supplied value', () => {
    expect(propEq('foo', 'bar',  obj)).to.be.true
    expect(propEq('foo', 'nope', obj)).to.be.false
    expect(propEq('bar', 'nope', obj)).to.be.false
  })

  it('is curried', () => {
    expect(propEq('foo', 'bar')(obj)).to.be.true
    expect(propEq('foo')('bar', obj)).to.be.true
    expect(propEq('foo')('bar')(obj)).to.be.true
  })
})
