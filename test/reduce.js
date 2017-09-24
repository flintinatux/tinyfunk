const { expect } = require('chai')

const { add, reduce } = require('..')

describe('reduce', () => {
  const list = ['1', '2', '3']

  it('reduces a list LTR', () =>
    expect(reduce(add, '0', list)).to.equal('0123')
  )

  it('is curried', () => {
    expect(reduce(add)('0', list)).to.equal('0123')
    expect(reduce(add, '0')(list)).to.equal('0123')
    expect(reduce(add)('0')(list)).to.equal('0123')
  })
})
