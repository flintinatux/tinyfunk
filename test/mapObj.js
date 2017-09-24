const { expect } = require('chai')

const { mapObj } = require('..')

describe('mapObj', () => {
  const obj = { foo: 1, bar: 2 }

  const f = (val, key) => key + val

  it('maps a function over an object', () =>
    expect(mapObj(f, obj)).to.eql({ foo: 'foo1', bar: 'bar2' })
  )

  it('is curried', () =>
    expect(mapObj(f)(obj)).to.eql({ foo: 'foo1', bar: 'bar2' })
  )
})
