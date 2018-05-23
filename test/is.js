const { expect } = require('chai')

const { is } = require('..')

class Foo {}
class Bar extends Foo {}

describe('is', () => {
  it('tests if object is instance of supplied contructor', () => {
    expect(is(Number, 12345)).to.be.true
    expect(is(String, 'foo')).to.be.true
    expect(is(Foo, new Bar())).to.be.true
  })

  it('is curried', () =>
    expect(is(String)('foo')).to.be.true
  )
})
