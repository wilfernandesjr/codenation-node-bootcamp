const { NODE_ENV } = process.env

module.exports = {
  db: {
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : `cars_${NODE_ENV}`,
  }
}
