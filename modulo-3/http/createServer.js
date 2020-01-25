const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
  res.write('Hello World!')
  res.end()
})

server.listen(PORT, () => {
  console.log('server start at port', PORT)
})