const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const util = require('../util')

module.exports = {
  create(req, res, next) {
    const { email, password } = req.body
    const secret = req.app.get('jwt-secret')
    const salt = bcrypt.genSaltSync(10)

    User.findOne({ email })
      .then(user => {
        if (user) {
          throw new Error('email exists')
        } else {
          const hashed = bcrypt.hashSync(password, salt)
          const newUser = {
            email,
            password: hashed,
          }
          User.create(newUser)
            .then(user => {
              util.generateToken(email, secret)
                .then(token => res.status(201).send({
                  userId: user._id,
                  token,
                }))
                .catch(next)
            })
            .catch(next)
        }
      })
      .catch(next)
  }
}
