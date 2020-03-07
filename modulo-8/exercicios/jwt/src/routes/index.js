const express = require('express')
const router = express.Router()
const teams = require('./teams')
const auth = require('./auth')

router.get('/', (req, res) => {
  res.json({
    auth: {
      login: 'http://localhost:8080/v1/auth/login'
    },
    teams: 'http://localhost:8080/v1/teams'
  })
})

router.use('/teams', teams)
router.use('/auth', auth)

module.exports = router
