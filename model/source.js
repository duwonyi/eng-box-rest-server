const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SourceSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Source = mongoose.model('source', SourceSchema)

module.exports = Source