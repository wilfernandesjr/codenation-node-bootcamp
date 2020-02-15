const express = require('express')
const router = express.Router()
const controller = require('../controllers/instructors')

router.get('/', controller.getAll)

router.get('/:instructorId', controller.getById)

router.post('/', controller.create)

router.put('/:instructorId', controller.update)

router.delete('/:instructorId', controller.delete)

module.exports = router
