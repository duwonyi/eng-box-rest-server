const http = require('http')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')
const morgan = require('morgan')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const app = express()

const {
  DB_HOST,
  DB_USER,
  DB_PASS,
  DB_PORT,
  DB_NAME,
} = process.env

mongoose.Promise = global.Promise

if (!process.env.NODE_ENV.includes('test')) {
  if (process.env.NODE_ENV === 'production') {
    mongoose.connect(`mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`)
  } else {
    mongoose.connect('mongodb://localhost/eng-box')
  }
}

app.use(compression())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.set('jwt-secret', process.env.JWT_SECRET)

routes(app)

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message })
})

module.exports = app
