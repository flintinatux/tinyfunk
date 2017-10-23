const { expect } = require('chai')
const property   = require('prop-factory')

const { curry, then } = require('..')

describe('then', () => {
  const res1 = property()
  const res2 = property()

  const add = curry((a, b) => Promise.resolve(a + b))

  beforeEach(() =>
    Promise.all([
      then(add(2), Promise.resolve(2)).then(res1),
      then(add(2))(Promise.resolve(2)).then(res2)
    ])
  )

  it('is a pointfree then', () =>
    expect(res1()).to.equal(4)
  )

  it('is curried', () =>
    expect(res2()).to.equal(4)
  )
})
