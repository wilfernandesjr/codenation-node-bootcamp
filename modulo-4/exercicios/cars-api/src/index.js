const { app } = require('./server')

app.listen(8080, function () {
  console.info('%s listening at port %s', app.name, 8080)
})
