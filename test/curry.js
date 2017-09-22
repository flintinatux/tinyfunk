const { expect } = require('chai')

const { curry } = require('..')

describe('curry', () => {
  const f = curry((a, b, c=0) =>
    a + b + c
  )

  it('curries a function to its length', () => {
    expect(f(1, 2)).to.equal(3)
    expect(f(1)(2)).to.equal(3)
    expect(f(1, 2, 3)).to.equal(6)
    expect(f(1)(2, 3)).to.equal(6)
  })
})
