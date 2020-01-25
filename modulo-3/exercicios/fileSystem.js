const fs = require('fs')
let csvToJson = require('csvjson')
const { toHTML } = require('./template')

const moviesCSV = fs.readFileSync(
  process.cwd() + '/modulo-3/exercicios/assets/movies.csv',
  'utf8'
)

const movies = csvToJson.toObject(moviesCSV, {
  delimiter : ',',
  quote     : '"'
})

const writeFile = movie => {
  const path = `${process.cwd()}/modulo-3/exercicios/views/`
  const content = toHTML(movie)

  try {
    return fs.writeFileSync(`${path}${movie.rank}.html`, content, 'utf8')
  } catch (err) {
    return console.log(`Couldn't create file ${movie.rank}.html`)
  }
}

const generateViews = movies => (
  movies.forEach(movie => console.log(movie) || writeFile(movie))
)

generateViews(movies)

module.exports = {
  writeFile,
  generateViews
}
