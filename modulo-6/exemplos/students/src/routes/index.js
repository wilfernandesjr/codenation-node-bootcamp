const express = require('express')
const router = express.Router()
const students = require('./students')

router.get('/', (req, res) => {
  res.json({
    students: 'http://localhost:8080/v1/students'
  })
})

router.use('/students', students)

module.exports = router
