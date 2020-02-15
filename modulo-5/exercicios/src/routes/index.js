const express = require('express')
const router = express.Router()
const cars = require('./cars')

router.get('/', (req, res) => {
  res.json({
    cars: 'http://localhost:8080/v1/cars'
  })
})

router.use('/cars', cars)

module.exports = router