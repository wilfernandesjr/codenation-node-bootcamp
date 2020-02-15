// Integration Tests Scenarios for Cars API

const request = require('supertest')
const server = require('../src/server')

const {
  connection,
  insertOnTable,
  cleanTable
} = require('./utils')

afterAll(() => connection.end())

describe.only('The API on /v1/cars Endpoint at GET method should...', () => {
  beforeAll(async () => {
    await insertOnTable(`null, 'Peugeot 207', 'Carrinho Massa', 'Peugeot', 19950.30, 2011, 'Black', 'Not found'`)
    await insertOnTable(`null, 'Argo', 'Carrinho TOP', 'Fiat', 45430.30, 2019, 'White', 'Not found'`)
  })

  afterAll(async () => await cleanTable())

  test(`return 200 as status code and have 'total' and 'data' as properties`, async () => {
    expect.assertions(2)

    const res = await request(server.app).get('/v1/cars')

    expect(res.statusCode).toEqual(200)
    expect(Object.keys(res.body)).toMatchObject([
      'total',
      'data'
    ])
  })

  test('return the right number of items and an object with all items', async () => {
    expect.assertions(2)

    const res = await request(server.app).get('/v1/cars')

    expect(res.body.total).toEqual(2)
    expect(typeof res.body.data).toBe('object')
  })

  test(`return the 'data' property with all items from DB`, async () => {
    expect.assertions(1)

    const res = await request(server.app).get('/v1/cars')

    console.log(JSON.stringify(res.body))

    expect(res.body).toMatchObject({
      "total": 2,
      "data": [
        {
          "id": 1,
          "car_model": "Peugeot 207",
          "description": "Carrinho Massa",
          "company": "Peugeot",
          "price": 19950.3,
          "year": 2011,
          "color": "Black",
          "image_url": "Not found"
        },
        {
          "id": 2,
          "car_model": "Argo",
          "description": "Carrinho TOP",
          "company": "Fiat",
          "price": 45430.3,
          "year": 2019,
          "color": "White",
          "image_url": "Not found"
        }
      ]
    })
  })
})

describe('The API on /v1/cars/:id Endpoint at GET method should...', () => {
  test(`return 200 as status code and the item founded`, async () => {
    // ...
  })

  test(`return 404 as status code and error message if the item doesn't exists and couldn't be found`, async () => {
    // ...
  })
})

describe('The API on /v1/cars Endpoint at POST method should...', () => {
  test(`return 201 as status code and return the item added`, async () => {
    // ...
  })

  test(`save on database the new item added`, async () => {
    // ...
  })
})

describe('The API on /v1/cars/:id Endpoint at PATCH method should...', () => {
  test(`return 200 as status code and return the item changed`, async () => {
    // ...
  })

  test(`return 404 as status code and error message if the item doesn't exists and couldn't be updated`, async () => {
    // ...
  })

  test(`save on database the item changed`, async () => {
    // ...
  })
})

describe('The API on /v1/cars/:id Endpoint at DELETE method should...', () => {
  test(`return 204 as status code to a item deleted successfully`, async () => {
    // ...
  })

  test(`return 404 as status code and error message if the item doesn't exists and couldn't be deleted`, async () => {
    // ...
  })

  test(`remove from database the item that should be deleted`, async () => {
    // ...
  })
})
