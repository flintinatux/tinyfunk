const { expect } = require('chai')

const { cond, constant, prop } = require('..')

describe('cond', () => {
  const conditional =
    cond([
      [ prop('foo'), constant('yes') ],
      [ prop('bar'), constant('no')  ]
    ])

  it('accepts a list of if/else pred and transformer pairs', () => {
    expect(conditional({ foo: true })).to.equal('yes')
    expect(conditional({ bar: true })).to.equal('no')
  })

  it('returns undefined if no preds match', () =>
    expect(conditional({ none: true })).to.be.undefined
  )
})
