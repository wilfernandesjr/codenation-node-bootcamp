const express = require('express')
const cookieParser = require('cookie-parser')

const { getHashedPassword, generateAuthToken } = require('./utils')

const app = express()

app.use(express.json())
app.use(cookieParser())

const users = []

const isValid = (username, password, confirmPassword, age) => {
  if (
    !username ||
    !password ||
    !confirmPassword ||
    !age
  ) return false

  if (
    password !== confirmPassword
  ) return false

  if (users.some(user => user.username === username)) return false

  return true
}

app.post('/signup', (req, res, next) => {
  const {
    username,
    password,
    confirmPassword,
    age
  } = req.body

  if (!isValid(username, password, confirmPassword, age)) {
    return res.status(400).json({
      error: 'Invalid parameters.'
    })
  }

  const hashedPassword = getHashedPassword(password)
  const token = generateAuthToken()

  users.push({
    username, hashedPassword, age, token
  })

  return res.status(201).json({ username, age, token })
})

app.post('/signin', (req, res, next) => {
  const { username, password } = req.body

  const user = users.find(u => (
    u.username === username &&
    u.hashedPassword === getHashedPassword(password)
  ))

  if (!user) return res.status(401).json({
    error: 'User or password invalid'
  })

  return res.status (200).json({
    token: user.token
  })
})

const isAuthorized = (req, res, next) => {
  const token = req.get('x-auth-token')

  const user = users.find(u => u.token === token)

  if ((user || {}).age >= 18) return next()

  return res.status(401).json({
    error: 'Sai daqui menó'
  })
}

app.get('/alcoholic-drinks', isAuthorized, (req, res, next) => {
  return res.status(200).json([
    {
      name: 'Catuaba',
      grad: '15%',
      rating: 1.5
    },
    {
      name: 'Corote Sabores',
      grad: '25%',
      rating: 6.5
    },
    {
      name: 'Pitú',
      grad: '55%',
      rating: 0.5
    }
  ])
})

app.listen(3000)
