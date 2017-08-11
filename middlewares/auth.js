const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  const header = req.headers['authorization'] || req.query.token

  if (!header) {
    return res.status(403).json({
      message: 'Not logged in'
    })
  }

  const token = header.replace('Bearer ', '')

  const validate = () => {
    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        req.app.get('jwt-secret'),
        (err, decoded) => {
          if (err) reject(err)
          resolve(decoded)
        }
      )
    })
  }

  validate()
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

