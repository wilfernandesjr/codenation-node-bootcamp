const fs = require('fs')

const file = fs.readFileSync('./data.csv').toString()

const parsedFile = file
    .split('\n')
    .map(line => line.split(','))
    .slice(1)

//Quantas nacionalidades (coluna `nationality`) diferentes existem no arquivo?
const q1 = () =>
  parsedFile.reduce((acc, cur) => {
    if (!cur[14]) return acc
    if (acc.includes(cur[14])) return acc

    return [...acc, cur[14]]
  }, []).length

/*
const q1 = () => {
  const result = new Set();
  parsedFile.forEach(line => line[14] && result.add(line[14]))
  return result.size
}
*/

module.exports = {
  q1
}