const { NODE_ENV = 'development' } = process.env

module.exports = {
  db: {
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : `students_${NODE_ENV}`,
  },
  env: NODE_ENV
}
