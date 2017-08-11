const SentencesCtrl = require('../controllers/sentences.controller')
const SourcesCtrl = require('../controllers/sources.controller')
const UsersCtrl = require('../controllers/users.controller')
const AuthCtrl = require('../controllers/authentication.controller')
const authMiddleware = require('../middlewares/auth')

module.exports = (app) => {
  app.post('/api/users', UsersCtrl.create)
  app.post('/api/signin', AuthCtrl.signin)
  app.get('/api/check', AuthCtrl.check)

  app.use('/api/sentences', authMiddleware)

  app.get('/api', SentencesCtrl.greeting)
  app.get('/api/sentences', SentencesCtrl.index)
  app.post('/api/sentences', SentencesCtrl.create)
  app.get('/api/sentences/:id', SentencesCtrl.read)
  app.patch('/api/sentences/:id', SentencesCtrl.update)
  app.delete('/api/sentences/:id', SentencesCtrl.delete)

  app.use('/api/sources', authMiddleware)

  app.get('/api/sources', SourcesCtrl.index)
  app.post('/api/sources', SourcesCtrl.create)
  app.get('/api/sources/:id', SourcesCtrl.read)
  app.patch('/api/sources/:id', SourcesCtrl.update)
  app.delete('/api/sources/:id', SourcesCtrl.delete)
  app.get('/api/sources/types/:type', SourcesCtrl.indexType)
}
