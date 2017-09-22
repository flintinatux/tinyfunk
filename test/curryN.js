const { expect } = require('chai')

const { curryN } = require('..')

describe('curryN', () => {
  const f = (a, b, c) =>
    a + b + (c || 0)

  const g = curryN(2, f)

  it('curries a function to N arity', () => {
    expect(g(1, 2)).to.equal(3)
    expect(g(1)(2)).to.equal(3)
    expect(g(1, 2, 3)).to.equal(6)
    expect(g(1)(2, 3)).to.equal(6)
  })

  it('is curried', () =>
    expect(curryN(2)(f)(1)(2)).to.equal(3)
  )
})
