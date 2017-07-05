const mongoose = require('mongoose')

require('dotenv').config()

let connectUrl = 'mongodb://localhost/eng-box-test'

if (!process.env.NODE_ENV.includes('local')) {
  connectUrl = process.env.TEST_DB_CONNECT_URL
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000
}

module.exports = () => {
  beforeAll(done => {
    mongoose.connect(connectUrl)
    mongoose.connection
      .once('open', () => {
        console.log('Connected successfully.')
        done()
      })
      .on('error', error => {
        console.warn('Warning', error)
      })
  })

  afterAll(done => {
    mongoose.disconnect(() => {
      console.log('Disconnected.')
      done()
    })
  })

  beforeEach(done => {
    const {
      sentences,
      sources,
    } = mongoose.connection.collections
    Promise.all([sentences.drop(), sources.drop()])
      .then(() => {
        console.log('All collections droped.')
        done()
      })
      .catch(() => done())
  })
}

