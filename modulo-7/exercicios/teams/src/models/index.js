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

const Players = sequelize.import(
  path.join(__dirname, 'players.js')
)

const Teams = sequelize.import(
  path.join(__dirname, 'teams.js')
)

// Implemente o relacionamento entre Players e Teams aqui...

const db = {}

db[Players.name] = Players
db[Teams.name] = Teams

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
