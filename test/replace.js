const { expect } = require('chai')

const { replace } = require('..')

describe('replace', () => {
  const string = 'I like food.'

  it('replaces a regex in a string with a replacement string', () =>
    expect(replace(/foo/, 'bar', string)).to.equal('I like bard.')
  )

  it('is curried', () => {
    expect(replace(/foo/)('bar', string)).to.equal('I like bard.')
    expect(replace(/foo/, 'bar')(string)).to.equal('I like bard.')
    expect(replace(/foo/)('bar')(string)).to.equal('I like bard.')
  })
})
