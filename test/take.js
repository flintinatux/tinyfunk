const { expect } = require('chai')

const { take } = require('..')

describe('take', () => {
  const arr = [1, 2, 3, 4]

  it('takes the first n items in a list', () => {
    expect(take(0, arr)).to.eql([])
    expect(take(1, arr)).to.eql([1])
    expect(take(2, arr)).to.eql([1, 2])
    expect(take(3, arr)).to.eql([1, 2, 3])
    expect(take(4, arr)).to.eql([1, 2, 3, 4])
    expect(take(5, arr)).to.eql([1, 2, 3, 4])
  })

  it('is curried', () =>
    expect(take(1)(arr)).to.eql([1])
  )
})
