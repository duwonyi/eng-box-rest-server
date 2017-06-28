const SentencesCtrl = require('../controllers/sentences.controller')
const SourcesCtrl = require('../controllers/sources.controller')

module.exports = (app) => {
  app.get('/api', SentencesCtrl.greeting)
  app.get('/api/sentences', SentencesCtrl.index)
  app.post('/api/sentences', SentencesCtrl.create)
  app.get('/api/sentences/:id', SentencesCtrl.read)
  app.patch('/api/sentences/:id', SentencesCtrl.update)
  app.delete('/api/sentences/:id', SentencesCtrl.delete)

  app.get('/api/sources', SourcesCtrl.index)
  app.post('/api/sources', SourcesCtrl.create)
  app.get('/api/sources/:id', SourcesCtrl.read)
  app.patch('/api/sources/:id', SourcesCtrl.update)
  app.delete('/api/sources/:id', SourcesCtrl.delete)
  app.get('/api/sources/types/:type', SourcesCtrl.indexType)
}
