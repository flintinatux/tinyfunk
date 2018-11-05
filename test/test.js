const { expect } = require('chai')

const { test } = require('..')

describe('test', () => {
  const pattern = /good/

  it('tests a string against a RegExp', () => {
    expect(test(pattern, 'good news')).to.be.true
    expect(test(pattern, 'bad news')).to.be.false
  })

  it('is curried', () =>
    expect(test(pattern)('good news')).to.be.true
  )
})
