const { expect } = require('chai')

const { merge } = require('..')

describe('merge', () => {
  it('merges the properties of one object onto a shallow copy of another', () =>
    expect(merge({ foo: 1 }, { bar: 2 })).to.eql({ foo: 1, bar: 2 })
  )

  it('is curried', () =>
    expect(merge({ foo: 1 })({ bar: 2 })).to.eql({ foo: 1, bar: 2 })
  )
})
