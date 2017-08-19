const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SentenceSchema = new Schema({
  sentence: {
    type: String,
    required: true
  },
  detail: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  source: {
    type: Schema.Types.ObjectId,
    ref: 'source',
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
})

const Sentence = mongoose.model('sentence', SentenceSchema)

module.exports = Sentence
