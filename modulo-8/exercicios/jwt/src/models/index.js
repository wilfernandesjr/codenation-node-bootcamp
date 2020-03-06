const Sequelize = require('sequelize')
const path = require('path')

const config = require('../config')

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    ...config.db,
    dialect: 'mysql'
  }
)

const Teams = sequelize.import(
  path.join(__dirname, 'teams.js')
)

const db = {}

db[Teams.name] = Teams

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
