const Sentence = require('../model/sentence')

module.exports = {
  greeting(req, res) {
    res.send({ hi: 'there' })
  },
  index(req, res, next) {
    const userId = req.query.userId
    Sentence.find({ userId })
      .populate('source')
      .then(sentences => res.send(sentences))
      .catch(next)
  },
  create(req, res, next) {
    const sentenceProps = req.body

    Sentence.create(sentenceProps)
      .then(sentence => res.status(201).send(sentence))
      .catch(next)
  },
  read(req, res, next) {
    const sentenceId = req.params.id

    Sentence.findById({ _id: sentenceId })
      .populate('source')
      .then(sentence => res.send(sentence))
      .catch(next)
  },
  update(req, res, next) {
    const sentenceId = req.params.id
    const sentenceProps = req.body

    Sentence.findByIdAndUpdate({ _id: sentenceId }, sentenceProps, { new: true })
      .populate('source')
      .then(sentence => res.send(sentence))
      .catch(next)
  },
  delete(req, res, next) {
    const sentenceId = req.params.id

    Sentence.findByIdAndRemove({ _id: sentenceId })
      .then(sentence => res.status(204).send(sentence))
      .catch(next)
  }
}
