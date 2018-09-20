const { expect } = require('chai')

const { pluck } = require('..')

describe('pluck', () => {
  const list = [{ a: 'b' }, { a: 'c' }, { b: 'a' }]

  it('plucks the values from a list for a given key', () =>
    expect(pluck('a', list)).to.eql(['b', 'c', undefined])
  )

  it('is curried', () =>
    expect(pluck('a')(list)).to.eql(['b', 'c', undefined])
  )
})
