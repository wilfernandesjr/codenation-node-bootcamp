const model = require('../model')['cars']

let Cars = {}

Cars.getAll = async (req, res, next) => {
  const data = await model.findAll()

  res.status(200).json({
    total: data.length,
    data
  })
}

Cars.getById = async (req, res, next) => {
  const { carId } = req.params
  const data = await model.findById(carId)

  res.status(200).json(data)
}

Cars.create = async (req, res, next) => {
  const result = await model.create(req.body)

  res.status(201).json({ result })
}

Cars.update = async (req, res, next) => {
  const { carId } = req.params
  const result = await model.update(req.body, carId)

  res.status(200).json({ result })
}

Cars.delete = async (req, res, next) => {
  const { carId } = req.params
  const result = await model.delete(carId)

  res.status(204).json({ result })
}

module.exports = Cars
