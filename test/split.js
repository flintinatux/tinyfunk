const { expect } = require('chai')

const { split } = require('..')

describe('split', () => {
  it('splits a string by a regexp', () => {
    expect(split('', 'abc')).to.eql(['a','b','c'])
    expect(split('a', 'banana')).to.eql(['b','n','n',''])
  })

  it('is curried', () =>
    expect(split('')('abc')).to.eql(['a','b','c'])
  )
})
