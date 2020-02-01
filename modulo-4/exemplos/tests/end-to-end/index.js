const supertest = require('supertest')
const express = require('express')
const app = express()
const getFemaleInactiveUsers = require('./getFemaleInactiveUsers')

app.get('/female-inactive', getFemaleInactiveUsers)

app.listen(3000)

module.exports = app
