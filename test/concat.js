const { expect } = require('chai')

const { concat } = require('..')

describe('concat', () => {
  const array  = ['a']
  const string = 'a'

  it('concats two semigroups', () => {
    expect(concat(array, array)).to.eql(['a','a'])
    expect(concat(string, string)).to.equal('aa')
  })

  it('is curried', () =>
    expect(concat(string)(string)).to.equal('aa')
  )
})
