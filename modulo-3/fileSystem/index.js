const fs = require('fs')

let oscars = fs.readFileSync('./movies.txt', 'utf-8')
console.log('Os filmes indicados ao Oscar 2020 são:')
console.log(oscars)

oscars = fs.readFileSync('./filmes.txt', 'utf-8')
console.log('Os filmes indicados ao Oscar 2020 são:')
console.log(oscars)

fs.readFile('./movies.txt', 'utf-8', (error, data) => {
  if (error) {
    return console.log(error)
  }

  console.log('Os filmes indicados ao Oscar 2020 são:')
  console.log(data)
})

console.log('O código continuou rodando')

fs.readFile('./movies.txt', 'utf-8').then(data => console.log(data))