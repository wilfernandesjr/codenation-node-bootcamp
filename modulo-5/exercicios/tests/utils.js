const {
  query,
  connection
} = require('../src/db')

const insertOnTable = async values => {
  const response = await query(`INSERT INTO cars VALUES (${values});`)

  return response
}

const cleanTable = async () => {
  const response = await query(`TRUNCATE TABLE cars`)
  return response
}

module.exports = {
  connection,
  insertOnTable,
  cleanTable
}
