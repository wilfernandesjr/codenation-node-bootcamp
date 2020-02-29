const express = require('express')
const router = express.Router()
const controller = require('../controllers/teams')

router.get('/', controller.getAll)

router.get('/:teamId', controller.getById)

router.get('/:teamId/players', controller.getTeamPlayers)

router.post('/', controller.create)

router.put('/:teamId', controller.update)

router.delete('/:teamId', controller.delete)

module.exports = router
