const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const { cars } = require('./model/')

app.use(bodyParser.json())

app.get('/v1/cars', async (req, res, next) =>
  cars.findAll()
    .then(result => 
      res.status(200).json({
        total: (Object.keys(result)).length,
        data: result
      })
    )
    .catch(next)
)

app.get('/v1/cars/:carId', async (req, res, next) => {
  const id = req.params.carId

  return cars.findById(id)
    .then(result => {
      if(!result) {
        return res.status(404).json({ error: `The record ${id} couldn't be found.` })  
      }
      return res.status(200).json(result)
    })
    .catch(next)
})

app.post('/v1/cars', async (req, res, next) => {
  const data = Object.assign({}, req.body)

  return cars.create(data)
    .then(result => res.status(201).json(result))
    .catch(next)
})

app.patch('/v1/cars/:carId', async (req, res, next) => {
  const id = req.params.carId
  let data = req.body

  return cars.update(data, id)
    .then(result => {
      if(!result) {
        return res.status(404).json({ error: `The record ${id} couldn't be found.` })  
      }
      return res.status(200).json(result)
    })
    .catch(next)
})

app.delete('/v1/cars/:carId', async (req, res, next) => {
  const id = req.params.carId

  return cars.destroy(id)
    .then(result => {
      if (!result) {
        return res.status(404).json({ error: `The record ${id} couldn't be found.` })  
      }
      res.status(204).send('OK')
    })
    .catch(next)
})

module.exports = { app }
