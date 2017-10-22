const { expect } = require('chai')

const { slice } = require('..')

describe('slice', () => {
  it('slices a list', () =>
    expect(slice(1, 3, [ 1, 2, 3, 4 ])).to.eql([ 2, 3 ])
  )

  it('is curried', () => {
    expect(slice(1)(3, [ 1, 2, 3, 4 ])).to.eql([ 2, 3 ])
    expect(slice(1, 3)([ 1, 2, 3, 4 ])).to.eql([ 2, 3 ])
    expect(slice(1)(3)([ 1, 2, 3, 4 ])).to.eql([ 2, 3 ])
  })
})
