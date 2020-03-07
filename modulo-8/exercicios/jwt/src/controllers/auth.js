const jwt = require('jsonwebtoken')
const { auth } = require('../config')

let Auth = {}

Auth.getToken = async (req, res, next) => {
  return res.status(501).send('Not implemented.')
}

module.exports = Auth
