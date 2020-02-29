const teamsModel = require('../models')['teams']
const playersModel = require('../models')['players']

let Teams = {}

Teams.getAll = async (req, res, next) => {
  // ...
}

Teams.getById = async (req, res, next) => {
  // ...
}

Teams.getTeamPlayers = async (req, res, next) => {
  // ...
}

Teams.create = async (req, res, next) => {
  // ...
}

Teams.update = async (req, res, next) => {
  const { teamId } = req.params
  const result = await teamsModel.update(req.body, {
    where: { id: teamId }
  })

  res.status(200).json({ result })
}

Teams.delete = async (req, res, next) => {
  const { teamId } = req.params
  const result = await teamsModel.destroy({
    where: { id: teamId }
  })

  res.status(204).json({ result })
}

module.exports = Teams
