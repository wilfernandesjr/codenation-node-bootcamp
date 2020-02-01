const fs = require('fs')
const csvToJson = require('csvjson')

const express = require('express')
const app = express()

const { renderMovie, renderHome } = require('./template')

const moviesCSV = fs.readFileSync(
  `${__dirname}/assets/movies.csv`,
  'utf8'
)

const movies = csvToJson.toObject(moviesCSV, {
  delimiter : ',',
  quote: '"'
})

app.get('/movies', async (req, res, next) => {
  const view = renderHome(movies)
  return res.send(view)
})

app.get('/movies/:id', async (req, res, next) => {
  const { id } = req.params

  const movie = movies.find(item => item.rank === id)
  const view = renderMovie(movie)

  return res.send(view)
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
