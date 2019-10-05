const { expect } = require('chai')

const { zipObj } = require('..')

describe('zipObj', () => {
  const keys = ['foo', 'bar']
  const vals = [ 1, 2 ]

  it('zips a list of keys and list of values into an object', () =>
    expect(zipObj(keys, vals)).to.eql({ foo: 1, bar: 2 })
  )

  it('is curried', () =>
    expect(zipObj(keys)(vals)).to.eql({ foo: 1, bar: 2 })
  )

  it('does not include a key when val is undefined', () =>
    expect(zipObj(keys, [ 1, undefined ])).to.eql({ foo: 1 })
  )
})
