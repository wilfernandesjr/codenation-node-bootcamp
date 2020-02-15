const rp = require('request-promise')

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
  const { studentId } = req.params
  const data = await model.findOne({
    where: { id: studentId }
  })

  res.status(200).json(data)
}

Students.create = async (req, res, next) => {
  const data = req.body

  if (data.github) {
    const user = data.github.split('/').pop()
    data.avatar = await rp(`https://api.github.com/users/${user}`, {
      headers: {
        'User-Agent': req.get('User-Agent')
      },
    }).then(res => JSON.parse(res)).then(res => res.avatar_url)
  }

  const result = await model.create(req.body)

  res.status(201).json({ result })
}

Students.update = async (req, res, next) => {
  const { studentId } = req.params
  const result = await model.update(req.body, {
    where: { id: studentId }
  })

  res.status(200).json({ result })
}

Students.delete = async (req, res, next) => {
  const { studentId } = req.params
  const result = await model.destroy({
    where: { id: studentId }
  })

  res.status(204).json({ result })
}

module.exports = Students
