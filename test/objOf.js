const { expect } = require('chai')

const { objOf } = require('..')

describe('objOf', () => {
  it('makes an object of a key/value pair', () =>
    expect(objOf('foo', 'bar')).to.eql({ foo: 'bar' })
  )

  it('is curried', () =>
    expect(objOf('foo')('bar')).to.eql({ foo: 'bar' })
  )
})
