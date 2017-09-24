const { expect } = require('chai')

const { add, multiply, pipe } = require('..')

describe('pipe', () => {
  const f = pipe(add(1), multiply(2))

  it('composes functions LTR', () =>
    expect(f(2)).to.equal(6)
  )
})
