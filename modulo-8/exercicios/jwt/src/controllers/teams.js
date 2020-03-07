const teamsModel = require('../models')['teams']

let Teams = {}

Teams.getAll = async (req, res, next) => {
  const data = await teamsModel.findAll()

  res.status(200).json({
    total: data.length,
    data
  })
}

Teams.getById = async (req, res, next) => {
  const { teamId } = req.params
  const data = await teamsModel.findOne({
    where: { id: teamId }
  })

  res.status(200).json(data)
}

Teams.create = async (req, res, next) => {
  const data = req.body

  const result = await teamsModel.create(data)

  res.status(201).json(result)
}

Teams.update = async (req, res, next) => {
  const { teamId } = req.params

  await teamsModel.update(req.body, {
    where: { id: teamId }
  })

  const result = await teamsModel.findOne({ where: { id: teamId }})

  res.status(200).json(result)
}

Teams.delete = async (req, res, next) => {
  const { teamId } = req.params
  const result = await teamsModel.destroy({
    where: { id: teamId }
  })

  res.status(204).json({ result })
}

module.exports = Teams
