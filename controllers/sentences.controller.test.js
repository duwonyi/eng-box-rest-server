const request = require('supertest')
const mongoose = require('mongoose')
const testHelper = require('../test-helpers')
const app = require('./../app')

const Sentence = mongoose.model('sentence')
const Source = mongoose.model('source')
const User = mongoose.model('user')

testHelper()

describe('Sentences controller', () => {
  let user
  beforeEach((done) => {
    user = new User({
      email: 'test@test.com',
      password: '1234',
    })
    user.save().then(() => done())
  })

  it('POST to /api/sentences creates a new sentence', (done) => {
    let book = new Source({
      type: 'book',
      title: 'Change',
      userId: user._id,
    }).save().then(source => {
      Sentence.count().then(count => {
        request(app)
          .post('/api/sentences')
          .send({ sentence: 'Hello', detail: '33', source: source, userId: user._id })
          .end(() => {
            Sentence.count().then(newCount => {
              expect(count + 1 === newCount)
              done()
            })
          })
      })
    })
  })
})
