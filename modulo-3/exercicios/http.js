const http = require('http')
const fs = require('fs')
const PORT = 3000

const getFile = file => {
  const path = `${process.cwd()}/modulo-3/exercicios/views/`

  try {
    return fs.readFileSync(`${path}${file}.html`, 'utf8')
  } catch (err) {
    return `404 - File Not Found`
  }
}

const server = http.createServer((req, res) => {
  const resource = req.url.split('/movies/').pop()

  const html = getFile(resource)

  res.write(html)
  res.end()
})

server.listen(PORT, () => {
  console.log('server start at port', PORT)
})
