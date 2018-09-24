const { expect } = require('chai')

const { nAry } = require('..')

describe('nAry', () => {
  const f = (a=0, b=0, c=0, d=0) =>
    a + b + c + d

  it('limits the args passed to the wrapped function', () => {
    expect(nAry(0, f)(1, 1, 1, 1)).to.equal(0)
    expect(nAry(1, f)(1, 1, 1, 1)).to.equal(1)
    expect(nAry(2, f)(1, 1, 1, 1)).to.equal(2)
    expect(nAry(3, f)(1, 1, 1, 1)).to.equal(3)
  })

  it('is curried', () =>
    expect(nAry(1)(f)(1, 1, 1, 1)).to.equal(1)
  )
})
