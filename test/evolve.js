const { expect } = require('chai')

const { add, evolve } = require('..')

describe('evolve', () => {
  const orig = { foo: 1, bar: { baz: 2 }, blah: 3 }

  const xfrms = { foo: add(1), bar: { baz: add(2) } }

  it('recursively evolves a nested object with a map of transforms', () =>
    expect(evolve(xfrms, orig)).to.eql({ foo: 2, bar: { baz: 4 }, blah: 3 })
  )

  it('is curried', () =>
    expect(evolve(xfrms)(orig)).to.eql({ foo: 2, bar: { baz: 4 }, blah: 3 })
  )
})
