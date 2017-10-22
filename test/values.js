const { expect } = require('chai')

const { values } = require('..')

describe('values', () => {
  it('returns a list of values in an object', () =>
    expect(values({ foo: 'bar', baz: 'bat' })).to.eql([ 'bar', 'bat' ])
  )
})
