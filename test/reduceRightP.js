const { expect } = require('chai')
const property = require('prop-factory')

const { reduceRightP } = require('..')

describe('reduceRightP', () => {
  const res = property()

  const f = (b, a) =>
    Promise.resolve(b + a)

  beforeEach(() =>
    reduceRightP(f, '0', ['1', '2', '3', '4']).then(res)
  )

  it('reduces a list RTL with an async reducer', () =>
    expect(res()).to.equal('04321')
  )
})
