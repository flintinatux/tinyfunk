const { expect } = require('chai')

const { identity } = require('..')

describe('identity', () => {
  const obj = { foo: 'bar' }

  it('always returns the first arg', () => {
    expect(identity('a')).to.equal('a')
    expect(identity(1)).to.equal(1)
    expect(identity(true)).to.equal(true)
    expect(identity(obj)).to.equal(obj)
  })
})
