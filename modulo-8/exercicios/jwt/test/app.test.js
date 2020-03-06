const request = require('supertest')
const server = require('../src/app')
const db = require('../src/models')

beforeAll(async () => {
  await db.sequelize.query('DROP TABLE IF EXISTS teams;')
  await db.sequelize.sync()
})

afterAll(async () => {
  await db.sequelize.query('DROP TABLE IF EXISTS teams;')
  await db.sequelize.close()
})

describe('The API on /v1/auth/login Endpoint at POST method should...', () => {
  test(`return 200 as status code and the new token generated`, async () => {
    // ...
  })

  test(`return 401 as status code for a given user or password invalid`, async () => {
    // ...
  })
})

describe('The API on /v1/teams Endpoint at POST method should...', () => {
  afterEach(async () => {
    await db.sequelize.query('TRUNCATE TABLE teams;')
  })

  test(`return 201 as status code and the new record created`, async () => {
    // ...
  })

  test(`return 401 as status code if a invalid token is passed on header`, async () => {
    // ...
  })
})

describe('The API on /v1/teams Endpoint at PATCH method should...', () => {
  beforeEach(async () => {
    await db.teams.create({
      "name": "Atlético MG",
      "description": "Maior time do Brasil",
      "coach": "Cuca",
      "shieldUrl": "",
      "birthYear": 1908
    })
  })

  afterEach(async () => {
    await db.sequelize.query('TRUNCATE TABLE teams;')
  })

  test(`return 200 as status code and the record updated`, async () => {
    // ...
  })

  test(`return 401 as status code if a invalid token is passed on header`, async () => {
    // ...
  })
})

describe('The API on /v1/teams Endpoint at DELETE method should...', () => {
  beforeEach(async () => {
    await db.teams.create({
      "name": "Atlético MG",
      "description": "Maior time do Brasil",
      "coach": "Cuca",
      "shieldUrl": "",
      "birthYear": 1908
    })
  })

  afterEach(async () => {
    await db.sequelize.query('TRUNCATE TABLE teams;')
  })

  test(`return 204 as status code for a deleted team`, async () => {
    // ...
  })

  test(`return 401 as status code if a invalid token is passed on header`, async () => {
    // ...
  })
})