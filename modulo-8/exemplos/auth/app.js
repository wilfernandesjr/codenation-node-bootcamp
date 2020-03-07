const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const routes = require('./routes')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

const users = []

const isAuthorized = (req, res, next) => {

}

router.get('/signup', (req, res, next) => {

})

router.get('/signin', (req, res, next) => {

})

router.get('/buy-drinks', isAuthorized, (req, res, next) => {

})

app.listen(3000)
