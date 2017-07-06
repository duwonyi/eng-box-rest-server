const request = require('supertest')
const mongoose = require('mongoose')
const testHelper = require('../test-helpers')
const app = require('./../app')

const Sentence = mongoose.model('sentence')
const Source = mongoose.model('source')

testHelper()

describe('Sentences controller', () => {
  it('POST to /api/sentences creates a new sentence', (done) => {
    let book = new Source({
      type: 'book',
      title: 'Change'
    }).save().then(source => {
      Sentence.count().then(count => {
        request(app)
          .post('/api/sentences')
          .send({ sentence: 'Hello', detail: '33', source: source, })
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
