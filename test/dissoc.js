const { expect } = require('chai')

const { dissoc } = require('..')

describe('dissoc', () => {
  it('removes a property from an obj', () =>
    expect(dissoc('foo', { foo: 'bar', baz: 'bat' })).to.eql({ baz: 'bat' })
  )

  it('is curried', () =>
    expect(dissoc('foo')({ foo: 'bar', baz: 'bat' })).to.eql({ baz: 'bat' })
  )
})
