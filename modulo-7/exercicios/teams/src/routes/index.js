const express = require('express')
const router = express.Router()
const players = require('./players')
const teams = require('./teams')

router.get('/', (req, res) => {
  res.json({
    players: 'http://localhost:8080/v1/players',
    teams: 'http://localhost:8080/v1/teams'
  })
})

router.use('/players', players)
router.use('/teams', teams)

module.exports = router
