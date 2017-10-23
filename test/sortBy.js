const { expect } = require('chai')

const { prop, sortBy } = require('..')

describe('sortBy', () => {
  const list = [
    { name: 'Scott' },
    { name: 'Frank' },
    { name: 'Scott' },
    { name: 'Reginald' }
  ]

  it('sorts a list by an indexing function', () =>
    expect(sortBy(prop('name'), list)).to.eql([
      { name: 'Frank' },
      { name: 'Reginald' },
      { name: 'Scott' },
      { name: 'Scott' }
    ])
  )

  it('is curried', () =>
    expect(sortBy(prop('name'))(list)).to.eql([
      { name: 'Frank' },
      { name: 'Reginald' },
      { name: 'Scott' },
      { name: 'Scott' }
    ])
  )
})
