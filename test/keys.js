const { expect } = require('chai')

const { keys } = require('..')

describe('keys', () => {
  it('returns a list of keys in an object', () =>
    expect(keys({ foo: 'bar', baz: 'bat' })).to.eql([ 'foo', 'baz' ])
  )
})
