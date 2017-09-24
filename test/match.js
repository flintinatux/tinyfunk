const { expect } = require('chai')

const { match } = require('..')

describe('match', () => {
  const regex = /foo/

  it('matches a regex to a string', () =>
    expect(match(regex, 'foot')).to.eql(['foo'])
  )

  it('is curried', () =>
    expect(match(regex)('foot')).to.eql(['foo'])
  )

  it('returns an empty array if no matches found', () =>
    expect(match(regex, 'nope')).to.eql([])
  )
})
