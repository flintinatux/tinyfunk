const { expect } = require('chai')

const { unit } = require('..')

describe('unit', () => {
  it('always returns undefined', () => {
    expect(unit('a')).to.be.undefined
    expect(unit()).to.be.undefined
  })
})
