const { expect } = require('chai')

const { indexBy, prop } = require('..')

describe('indexBy', () => {
  const list = [{ id: 'abc' }, { id: 'def' }]

  it('indexes a list by a key function', () =>
    expect(indexBy(prop('id'), list)).to.eql({
      abc: { id: 'abc' },
      def: { id: 'def' }
    })
  )

  it('is curried', () =>
    expect(indexBy(prop('id'))(list)).to.eql({
      abc: { id: 'abc' },
      def: { id: 'def' }
    })
  )
})
