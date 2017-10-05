const { expect } = require('chai')

const { add, reduce, unapply } = require('..')

describe('unapply', () => {
  const sum = unapply(reduce(add, 0))

  it('converts a function which takes an array to variadic', () =>
    expect(sum(1, 2, 3, 4)).to.equal(10)
  )
})
