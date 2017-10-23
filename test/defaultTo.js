const { expect } = require('chai')

const { defaultTo } = require('..')

describe('defaultTo', () => {
  it('defaults to a value if the original is null', () =>
    expect(defaultTo(1, null)).to.equal(1)
  )

  it('defaults to a value if the original is undefined', () =>
    expect(defaultTo(1, undefined)).to.equal(1)
  )

  it('defaults to a value if the original is NaN', () =>
    expect(defaultTo(1, 1/'a')).to.equal(1)
  )

  it('passes thru the original otherwise', () =>
    expect(defaultTo(1, 2)).to.equal(2)
  )

  it('is curried', () =>
    expect(defaultTo(1)(null)).to.equal(1)
  )
})
