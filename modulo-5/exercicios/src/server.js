const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const { cars } = require('./model/')

app.use(bodyParser.json())

app.get('/v1/cars', async (req, res, next) =>
  res.status(500).send('Not implemented.')
)

app.get('/v1/cars/:carId', async (req, res, next) => {
  res.status(500).send('Not implemented.')
})

app.post('/v1/cars', async (req, res, next) => {
  res.status(500).send('Not implemented.')
})

app.patch('/v1/cars/:carId', async (req, res, next) => {
  res.status(500).send('Not implemented.')
})

app.delete('/v1/cars/:carId', async (req, res, next) => {
  res.status(500).send('Not implemented.')
})

module.exports = { app }
