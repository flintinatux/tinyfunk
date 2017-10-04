const { expect } = require('chai')
const spy        = require('@articulate/spy')

const { tap } = require('..')

describe('tap', () => {
  const f = spy()

  afterEach(() =>
    f.reset()
  )

  it('passes thru the arg after executing the function', () => {
    expect(tap(f, 'a')).to.equal('a')
    expect(f.calls.length).to.equal(1)
  })

  it('is curried', () => {
    expect(tap(f)('a')).to.equal('a')
    expect(f.calls.length).to.equal(1)
  })
})
