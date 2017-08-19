const jwt = require('jsonwebtoken')

module.exports = {
  generateToken: (payload, secret) => {
    return new Promise((resolve, reject) => {
      jwt.sign({
        payload
      },
      secret,
      {
          expiresIn: '30d'
      },
      (err, token) => {
        if (err) reject(err)
        resolve(token)
      })
    })
  },
  verifyToken: (token, secret) => {
    return new Promise((resolve, reject) => {
      jwt.verify(
        token,
        secret,
        (err, decoded) => {
          if (err) reject(err)
          resolve(decoded)
        }
      )
    })
  }
}
