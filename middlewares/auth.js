const jwt = require('jsonwebtoken')
const util = require('../util')

const authMiddleware = (req, res, next) => {
  const header = req.headers['authorization'] || req.query.token

  if (!header) {
    return res.status(403).json({
      message: 'Not logged in'
    })
  }

  const token = header.replace('Bearer ', '')
  const secret = req.app.get('jwt-secret')

  util.verifyToken(token, secret)
    .then(decoded => {
      req.decoded = decoded
      next()
    })
    .catch(error => {
      res.status(403).json({
        message: error.message
      })
    })
}

module.exports = authMiddleware

