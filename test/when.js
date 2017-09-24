const { expect } = require('chai')

const { add, when } = require('..')

describe('when', () => {
  const falsy = x => !x

  it('transforms an arg by a function when a predicate is true', () => {
    expect(when(falsy, add(1), 0)).to.equal(1)
    expect(when(falsy, add(1), 1)).to.equal(1)
  })

  it('is curried', () => {
    expect(when(falsy)(add(1), 0)).to.equal(1)
    expect(when(falsy, add(1))(0)).to.equal(1)
    expect(when(falsy)(add(1))(0)).to.equal(1)
  })
})
