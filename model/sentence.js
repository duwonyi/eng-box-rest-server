const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SentenceSchema = new Schema({
  sentence: {
    type: String,
    required: true
  },
  location: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  source: {
    type: Schema.Types.ObjectId,
    ref: 'source'
  }
})

const Sentence = mongoose.model('sentence', SentenceSchema)

module.exports = Sentence