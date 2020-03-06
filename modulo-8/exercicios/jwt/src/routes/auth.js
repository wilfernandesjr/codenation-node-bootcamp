const express = require('express')
const router = express.Router()
const controller = require('../controllers/auth')

router.post('/login', controller.getToken)

module.exports = router
