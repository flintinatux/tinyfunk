const { expect } = require('chai')

const { add, unless } = require('..')

describe('unless', () => {
  const truthy = x => !!x

  it('transforms an arg by a function unless a predicate is true', () => {
    expect(unless(truthy, add(1), 0)).to.equal(1)
    expect(unless(truthy, add(1), 1)).to.equal(1)
  })

  it('is curried', () => {
    expect(unless(truthy)(add(1), 0)).to.equal(1)
    expect(unless(truthy, add(1))(0)).to.equal(1)
    expect(unless(truthy)(add(1))(0)).to.equal(1)
  })
})
