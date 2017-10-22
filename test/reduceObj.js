const { expect } = require('chai')

const { reduceObj } = require('..')

describe('reduceObj', () => {
  const obj = { name: 'Spot', color: 'blue' }

  const serialize = (acc, val, key) =>
    (acc ? `${acc},` : '') + `${key}:${val}`

  it('reduces an object', () =>
    expect(reduceObj(serialize, '', obj)).to.equal('name:Spot,color:blue')
  )

  it('is curried', () => {
    expect(reduceObj(serialize)('', obj)).to.equal('name:Spot,color:blue')
    expect(reduceObj(serialize, '')(obj)).to.equal('name:Spot,color:blue')
    expect(reduceObj(serialize)('')(obj)).to.equal('name:Spot,color:blue')
  })
})
