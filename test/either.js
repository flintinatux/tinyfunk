const { expect } = require('chai')

const { either, prop } = require('..')

describe('either', () => {
  const f = prop('f')
  const g = prop('g')

  const obj = { g: 'h' }

  it('wraps two functions in an || operation', () =>
    expect(either(f, g, obj)).to.equal('h')
  )

  it('is curried', () => {
    expect(either(f)(g, obj)).to.equal('h')
    expect(either(f, g)(obj)).to.equal('h')
    expect(either(f)(g)(obj)).to.equal('h')
  })
})
