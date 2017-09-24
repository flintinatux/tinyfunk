const { expect } = require('chai')

const { props } = require('..')

describe('props', () => {
  const obj = { foo: 1, bar: 2, baz: 3 }

  it('lists values from an object corresponding to a list of keys', () =>
    expect(props(['foo', 'bar'], obj)).to.eql([ 1, 2 ])
  )

  it('is curried', () =>
    expect(props(['foo', 'bar'])(obj)).to.eql([ 1, 2 ])
  )
})
