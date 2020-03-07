const express = require('express')
const router = express.Router()
const controller = require('../controllers/teams')

router.get('/', controller.getAll)

router.get('/:teamId', controller.getById)

router.post('/', controller.create)

router.patch('/:teamId', controller.update)

router.delete('/:teamId', controller.delete)

module.exports = router
