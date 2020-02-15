// Here is where you should implement methods to help you to handle DB queries

const mysql = require('mysql')
const { db } = require('../config')

const connection = mysql.createConnection(db)

const query = query => {
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results, fields) => {
      if (error) reject(error)

      resolve(results)
    })
  })
}

const setValuesToInsert = obj =>
  Object.values(obj)
    .reduce((acc, cur) => (
      `${acc}, ${typeof cur !== 'string' ? cur : `'${cur}'`}`
    ), 'null')

const setValuesToUpdate = obj => {
  const result = Object.keys(obj)
    .reduce((acc, cur) => (
      `${acc}${cur} = ${typeof obj[cur] !== 'string' ? obj[cur] : `'${obj[cur]}'`}, `
    ), '')

  return result.substring(0, result.length - 2)
}

module.exports = {
  query,
  setValuesToInsert,
  setValuesToUpdate,
  connection
}