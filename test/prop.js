const { expect } = require('chai')

const { prop } = require('..')

describe('prop', () => {
  const obj = { foo: 'bar' }

  it('accesses the value of a property on an object', () =>
    expect(prop('foo', obj)).to.equal('bar')
  )

  it('is curried', () =>
    expect(prop('foo')(obj)).to.equal('bar')
  )
})
