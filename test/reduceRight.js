const { expect } = require('chai')

const { add, reduceRight } = require('..')

describe('reduceRight', () => {
  const list = ['1', '2', '3']

  it('reduces a list RTL', () =>
    expect(reduceRight(add, '0', list)).to.equal('0321')
  )

  it('is curried', () => {
    expect(reduceRight(add)('0', list)).to.equal('0321')
    expect(reduceRight(add, '0')(list)).to.equal('0321')
    expect(reduceRight(add)('0')(list)).to.equal('0321')
  })
})
