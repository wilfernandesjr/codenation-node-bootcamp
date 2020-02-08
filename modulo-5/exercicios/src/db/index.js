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

module.exports = {
  query
}