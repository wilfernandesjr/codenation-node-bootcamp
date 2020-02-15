const model = require('../models')['instructors']

let Instructors = {}

Instructors.getAll = async (req, res, next) => {
  const data = await model.findAll({})

  res.status(200).json({
    total: data.length,
    data
  })
}

Instructors.getById = async (req, res, next) => {
  const { instructorId } = req.params
  const data = await model.findOne({
    where: { id: instructorId }
  })

  res.status(200).json(data)
}

Instructors.create = async (req, res, next) => {
  const result = await model.create(req.body)

  res.status(201).json({ result })
}

Instructors.update = async (req, res, next) => {
  const { instructorId } = req.params
  const result = await model.update(req.body, {
    where: { id: instructorId }
  })

  res.status(200).json({ result })
}

Instructors.delete = async (req, res, next) => {
  const { instructorId } = req.params
  const result = await model.destroy({
    where: { id: instructorId }
  })

  res.status(204).json({ result })
}

module.exports = Instructors
