const { expect } = require('chai')

const { add, ifElse } = require('..')

describe('ifElse', () => {
  const falsy = x => !x

  it('branches between two functions based on predicate', () => {
    expect(ifElse(falsy, add(1), add(2), 0)).to.equal(1)
    expect(ifElse(falsy, add(1), add(2), 1)).to.equal(3)
  })

  it('isCurried', () => {
    expect(ifElse(falsy, add(1), add(2))(0)).to.equal(1)
    expect(ifElse(falsy, add(1))(add(2), 0)).to.equal(1)
    expect(ifElse(falsy)(add(1), add(2), 0)).to.equal(1)
    expect(ifElse(falsy)(add(1))(add(2))(0)).to.equal(1)
  })
})
