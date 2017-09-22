const { expect } = require('chai')

const { call } = require('..')

describe('call', () => {
  const f = (a, b) => a + b

  it('calls a function with variadic arguments', () =>
    expect(call(f, 1, 2)).to.equal(3)
  )

  it('is curried', () =>
    expect(call(f)(1, 2)).to.equal(3)
  )
})
