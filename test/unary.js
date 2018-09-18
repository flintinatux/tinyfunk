const { expect } = require('chai')

const { unary } = require('..')

describe('unary', () => {
  const f = unary((a=0, b=0) =>
    a + b
  )

  it('only passes one arg to wrapped function', () => {
    expect(f()).to.equal(0)
    expect(f(1)).to.equal(1)
    expect(f(1, 2)).to.equal(1)
  })
})
