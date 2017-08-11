const jwt = require('jsonwebtoken')

module.exports = {
  signin(req, res, next) {
    const { email, password } = req.body
    const seqret = req.app.get('jwt-secret')

    const validate = () => {
      return new Promise((resolve, reject) => {
        jwt.sign({
          email
        },
        seqret,
        {
           expiresIn: '30d'
        },
        (err, token) => {
          if (err) reject(err)
          resolve(token)
        })
      })
    }

    validate()
      .then(token => res.send({token}))
      .catch(next)
  },
  check(req, res, next) {
    const header = req.headers['authorization'] || req.query.token

    if (!header) {
      return res.status(403).json({
        message: 'No Token'
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
      .then(decoded => res.send(decoded))
      .catch(next)
  }
}
