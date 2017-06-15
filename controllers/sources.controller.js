const Source = require('../model/source')

module.exports = {
  index(req, res, next) {
    Source.find({})
      .then(sources => res.send(sources))
      .catch(next)
  },
  create(req, res, next) {
    const sourceProps = req.body

    Source.create(sourceProps)
      .then(source => res.status(201).send(source))
      .catch(next)
  },
  read(req, res, next) {
    const sourceId = req.params.id

    Source.findById({ _id: sourceId })
      .then(source => res.send(source))
      .catch(next)
  },
  update(req, res, next) {
    const sourceId = req.params.id
    const sourceProps = req.body

    Source.findByIdAndUpdate({ _id: sourceId }, sourceProps, { new: true })
      .then(source => res.send(source))
      .catch(next)
  },
  delete(req, res, next) {
    const sourceId = req.params.id

    Source.findByIdAndRemove( { _id: sourceId })
      .then(source => res.status(204).send(source))
      .catch(next)
  }
}