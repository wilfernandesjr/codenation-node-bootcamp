const express = require('express')
const app = express()

app.get('/movies/:id', async (req, res, next) => {
  return res.send('blau')
})

app.get('/api/movies/:id', async (req, res, next) => {
  return res.send('bliu')
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
