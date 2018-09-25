const { expect } = require('chai')

const { prop, propEq, uniqBy } = require('..')

describe('uniqBy', () => {
  const list = [{ id: 'abc' }, { id: 'def' }, { id: 'abc' }]

  it('uniques a list by a key function', () => {
    const res = uniqBy(prop('id'), list)
    expect(res.length).to.equal(2)
    expect(res.find(propEq('id', 'abc'))).to.exist
    expect(res.find(propEq('id', 'def'))).to.exist
  })

  it('is curried', () => {
    const res = uniqBy(prop('id'))(list)
    expect(res.length).to.equal(2)
    expect(res.find(propEq('id', 'abc'))).to.exist
    expect(res.find(propEq('id', 'def'))).to.exist
  })
})
