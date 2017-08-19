const util = require('./util')

describe('Util', () => {
  it('generates a token and verify the token', () => {
    util.generateToken('test', 'secret')
      .then(token => util.verifyToken(token, 'secret'))
      .then(decoded => expect(decoded).toBe('test'))
  })
})
