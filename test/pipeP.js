const { expect } = require('chai')
const property   = require('prop-factory')

const { curry, pipeP } = require('..')

describe('pipeP', () => {
  const res = property()

  const add      = curry((a, b) => Promise.resolve(a + b))
  const multiply = curry((a, b) => Promise.resolve(a * b))

  const maths = pipeP(add(2), multiply(3))

  beforeEach(() =>
    maths(1).then(res)
  )

  it('composes async functions RTL', () =>
    expect(res()).to.equal(9)
  )
})
