const fs = require('fs')
const csvToJson = require('csvjson')

const express = require('express')
const app = express()

const moviesCSV = fs.readFileSync(
  process.cwd() + '/modulo-3/exercicios/assets/movies.csv',
  'utf8'
)

const movies = csvToJson.toObject(moviesCSV, {
  delimiter : ',',
  quote     : '"'
})

app.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params

  return res.sendFile(
    `${process.cwd()}/modulo-3/exercicios/views/${id}.html`
  )
})

app.get('/api/movies/:id', async (req, res, next) => {
  const { id } = req.params
  const movie = movies.find(movie => movie.rank === id)

  return res.json(movie)
})

const start = async (port = 8080) => {
  app.listen(port, function () {
    console.info('%s listening at %s', app.name, app.url)
  })
}

const stop = () => {
  app.close(() => {
    console.info('App Stopped')
  })
}

module.exports = {
  app,
  start,
  stop
}
