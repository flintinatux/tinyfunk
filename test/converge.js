const { expect } = require('chai')

const { add, converge, multiply } = require('..')

describe('converge', () => {
  it('converges the results of applying an arg to branching functions', () =>
    expect(converge(multiply, [ add(1), add(2) ])(1)).to.equal(6)
  )

  it('is curried', () =>
    expect(converge(multiply)([ add(1), add(2) ])(1)).to.equal(6)
  )
})
