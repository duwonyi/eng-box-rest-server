const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const util = require('../util')

module.exports = {
  signin(req, res, next) {
    const { email, password } = req.body
    const secret = req.app.get('jwt-secret')

    User.findOne({ email })
      .then(user => {
        if (bcrypt.compareSync(password, user.password)) {
          util.generateToken(email, secret)
            .then(token => res.send({ userId: user._id, token }))
            .catch(next)
        } else {
          return res.status(401).json({
            message: 'invalid password'
          })
        }
      })
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
    const secret = req.app.get('jwt-secret')

    util.verifyToken(token, secret)
      .then(decoded => res.send(decoded))
      .catch(next)
  }
}
