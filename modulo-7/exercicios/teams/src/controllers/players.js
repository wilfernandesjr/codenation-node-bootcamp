const model = require('../models')['players']
const { Op } = require('sequelize')

let Players = {}

Players.getAll = async (req, res, next) => {
  // ...
}

Players.getById = async (req, res, next) => {
  // ...
}

Players.create = async (req, res, next) => {
  // ...
}

Players.update = async (req, res, next) => {
  const { playerId } = req.params
  const result = await model.update(req.body, {
    where: { id: playerId }
  })

  res.status(200).json({ result })
}

Players.delete = async (req, res, next) => {
  const { playerId } = req.params
  const result = await model.destroy({
    where: { id: playerId }
  })

  res.status(204).json({ result })
}

module.exports = Players
