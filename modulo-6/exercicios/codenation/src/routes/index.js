const express = require('express')
const router = express.Router()
const students = require('./students')
const instructors = require('./instructors')
const classes = require('./classes')

router.get('/', (req, res) => {
  res.json({
    students: 'http://localhost:8080/v1/students',
    instructors: 'http://localhost:8080/v1/instructors',
    classes: 'http://localhost:8080/v1/classes'
  })
})

router.use('/students', students)
router.use('/instructors', instructors)
router.use('/classes', classes)

module.exports = router
