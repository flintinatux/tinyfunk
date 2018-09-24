const { expect } = require('chai')

const { find } = require('..')

describe('find', () => {
  const arr = [1, 2, 3, 4]

  const gt2 = x =>
    x > 2

  it('finds an item in a list', () =>
    expect(find(gt2, arr)).to.equal(3)
  )

  it('is curried', () =>
    expect(find(gt2)(arr)).to.equal(3)
  )
})
