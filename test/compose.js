const { expect } = require('chai')

const { add, compose, multiply } = require('..')

describe('compose', () => {
  const f = compose(add(1), multiply(2))

  it('composes functions RTL', () =>
    expect(f(2)).to.equal(5)
  )
})
