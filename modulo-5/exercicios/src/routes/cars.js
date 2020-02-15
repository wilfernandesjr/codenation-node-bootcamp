const express = require('express')
const router = express.Router()
const controller = require('../controllers/cars')

router.get('/', controller.getAll)

router.get('/:carId', controller.getById)

router.post('/', controller.create)

router.put('/:carId', controller.update)

router.delete('/:carId', controller.delete)

module.exports = router
