const model = require('../models')['classes']

let Classes = {}

Classes.getAll = async (req, res, next) => {
  const data = await model.findAll({})

  res.status(200).json({
    total: data.length,
    data
  })
}

Classes.getById = async (req, res, next) => {
  const { classId } = req.params
  const data = await model.findOne({
    where: { id: classId }
  })

  res.status(200).json(data)
}

Classes.create = async (req, res, next) => {
  const data = req.body

  data.start = new Date(data.start)
  data.finish = new Date(data.finish)

  const result = await model.create(data)

  res.status(201).json({ result })
}

Classes.update = async (req, res, next) => {
  const { classId } = req.params
  const result = await model.update(req.body, {
    where: { id: classId }
  })

  res.status(200).json({ result })
}

Classes.delete = async (req, res, next) => {
  const { classId } = req.params
  const result = await model.destroy({
    where: { id: classId }
  })

  res.status(204).json({ result })
}

module.exports = Classes
