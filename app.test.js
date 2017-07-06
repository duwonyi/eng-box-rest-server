const request = require('supertest')
const app = require('./app')

describe('App', () => {
  it('handles a GET request to /api', (done) => {
    request(app)
      .get('/api')
      .end((err, response) => {
        expect(response.body.hi).toBe('there')
        done()
      })
  });
})
