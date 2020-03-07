const jwt = require('jsonwebtoken')
const { auth } = require('../config')

module.exports = (req, res, next) => {
  return res.status(501).send('Not implemented.')
}
