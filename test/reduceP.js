const { expect } = require('chai')
const property = require('prop-factory')

const { reduceP } = require('..')

describe('reduceP', () => {
  const res = property()

  const f = (b, a) =>
    Promise.resolve(b + a)

  beforeEach(() =>
    reduceP(f, '0', ['1', '2', '3', '4']).then(res)
  )

  it('reduces a list LTR with an async reducer', () =>
    expect(res()).to.equal('01234')
  )
})
