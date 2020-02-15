const model = require('../models')['students']

let Students = {}

Students.getAll = async (req, res, next) => {
  const data = await model.findAll({})

  res.status(200).json({
    total: data.length,
    data
  })
}

Students.getById = async (req, res, next) => {
  const { animalId } = req.params
  const data = await model.findOne({
    where: { id: animalId }
  })

  res.status(200).json(data)
}

Students.create = async (req, res, next) => {
  const result = await model.create(req.body)

  res.status(201).json({ result })
}

Students.update = async (req, res, next) => {
  const { animalId } = req.params
  const result = await model.update(req.body, {
    where: { id: animalId }
  })

  res.status(200).json({ result })
}

Students.delete = async (req, res, next) => {
  const { animalId } = req.params
  const result = await model.destroy({
    where: { id: animalId }
  })

  res.status(204).json({ result })
}

module.exports = Students
