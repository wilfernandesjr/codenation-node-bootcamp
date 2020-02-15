const express = require('express')
const router = express.Router()
const controller = require('../controllers/classes')

router.get('/', controller.getAll)

router.get('/:classId', controller.getById)

router.post('/', controller.create)

router.put('/:classId', controller.update)

router.delete('/:classId', controller.delete)

module.exports = router
