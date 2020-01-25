const https = require('https')

const options = {
  hostname: 'www.google.com.br',
  method: 'GET'
}

const request = https.request(options, res => {
  res.on('data', (data) => {
    console.log(data)
  })
})

request.end()
