// Integration Tests Scenarios for Cars API

const request = require('supertest')
const server = require('../src/server')
const {
  cleanDB,
  openDB,
  populateDB
} = require('./utils')

beforeAll(() => cleanDB())
afterAll(() => cleanDB())

describe('The API on /v1/cars Endpoint at GET method should...', () => {
  beforeAll(() => {
    populateDB({
      "CAR1580214599567RD121": {
        "created_at": "2020-01-28T12:29:59.567Z",
        "updated_at": "2020-01-28T12:29:59.567Z",
        "car_model": "Relâmpago Marquinhos",
        "description": "O carro mais dahora do mundo.",
        "company": "Disney",
        "price": "US$ 99.000,00",
        "year": "2008",
        "color": "Vermelho BOLADO",
        "image_url": "Sem tempo, irmão."
      },
      "CAR1580216220549RD493": {
        "created_at": "2020-01-28T12:57:00.550Z",
        "updated_at": "2020-01-28T12:57:00.550Z",
        "car_model": "Herbie",
        "description": "Herbie, o meu fusca TURBINADO",
        "company": "Volkswagen",
        "price": "US$ 25.000,00",
        "year": "1974",
        "color": "Branco com umas listras top",
        "image_url": "Sem tempo, irmão."
      }
    })
  })

  afterAll(() => cleanDB())

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

    expect(res.body).toMatchObject({
      total: 2,
      data: {
        "CAR1580214599567RD121": {
          "created_at": "2020-01-28T12:29:59.567Z",
          "updated_at": "2020-01-28T12:29:59.567Z",
          "car_model": "Relâmpago Marquinhos",
          "description": "O carro mais dahora do mundo.",
          "company": "Disney",
          "price": "US$ 99.000,00",
          "year": "2008",
          "color": "Vermelho BOLADO",
          "image_url": "Sem tempo, irmão."
        },
        "CAR1580216220549RD493": {
          "created_at": "2020-01-28T12:57:00.550Z",
          "updated_at": "2020-01-28T12:57:00.550Z",
          "car_model": "Herbie",
          "description": "Herbie, o meu fusca TURBINADO",
          "company": "Volkswagen",
          "price": "US$ 25.000,00",
          "year": "1974",
          "color": "Branco com umas listras top",
          "image_url": "Sem tempo, irmão."
        }
      }
    })
  })
})

describe('The API on /v1/cars/:id Endpoint at GET method should...', () => {
  beforeAll(() => {
    populateDB({
      "CAR1580214599567RD121": {
        "created_at": "2020-01-28T12:29:59.567Z",
        "updated_at": "2020-01-28T12:29:59.567Z",
        "car_model": "Relâmpago Marquinhos",
        "description": "O carro mais dahora do mundo.",
        "company": "Disney",
        "price": "US$ 99.000,00",
        "year": "2008",
        "color": "Vermelho BOLADO",
        "image_url": "Sem tempo, irmão."
      }
    })
  })

  afterAll(() => cleanDB())

  test(`return 200 as status code and the item founded`, async () => {
    expect.assertions(2)

    const res = await request(server.app).get('/v1/cars/CAR1580214599567RD121')

    expect(res.statusCode).toEqual(200)
    expect(res.body).toMatchObject({
      "created_at": "2020-01-28T12:29:59.567Z",
      "updated_at": "2020-01-28T12:29:59.567Z",
      "car_model": "Relâmpago Marquinhos",
      "description": "O carro mais dahora do mundo.",
      "company": "Disney",
      "price": "US$ 99.000,00",
      "year": "2008",
      "color": "Vermelho BOLADO",
      "image_url": "Sem tempo, irmão."
    })
  })

  test(`return 404 as status code and error message if the item doesn't exists and couldn't be found`, async () => {
    expect.assertions(2)

    const res = await request(server.app)
      .get('/v1/cars/DOESNTEXISTS')

    expect(res.statusCode).toEqual(404)
    expect(res.body).toMatchObject({
      error: `The record DOESNTEXISTS couldn't be found.`
    })
  })
})

describe('The API on /v1/cars Endpoint at POST method should...', () => {
  afterEach(() => cleanDB())

  test(`return 201 as status code and return the item added`, async () => {
    expect.assertions(2)

    const res = await request(server.app)
      .post('/v1/cars')
      .send({
        "car_model": "Relâmpago Marquinhos",
        "description": "O carro mais dahora do mundo.",
        "company": "Disney",
        "price": "US$ 99.000,00",
        "year": "2008",
        "color": "Vermelho BOLADO",
        "image_url": "Sem tempo, irmão."
      })

    expect(res.statusCode).toEqual(201)
    expect(res.body).toMatchObject({
      "car_model": "Relâmpago Marquinhos",
      "description": "O carro mais dahora do mundo.",
      "company": "Disney",
      "price": "US$ 99.000,00",
      "year": "2008",
      "color": "Vermelho BOLADO",
      "image_url": "Sem tempo, irmão."
    })
  })

  test(`save on database the new item added`, async () => {
    expect.assertions(1)

    const res = await request(server.app)
      .post('/v1/cars')
      .send({
        "car_model": "Herbie",
        "description": "Herbie, o meu fusca TURBINADO",
        "company": "Volkswagen",
        "price": "US$ 25.000,00",
        "year": "1974",
        "color": "Branco com umas listras top",
        "image_url": "Sem tempo, irmão."
      })

    const database = openDB()
    const record = Object.values(database)
      .find(item => item.car_model === 'Herbie')

    expect(record).toMatchObject({
      "car_model": "Herbie",
      "description": "Herbie, o meu fusca TURBINADO",
      "company": "Volkswagen",
      "price": "US$ 25.000,00",
      "year": "1974",
      "color": "Branco com umas listras top",
      "image_url": "Sem tempo, irmão."
    })
  })
})

describe('The API on /v1/cars/:id Endpoint at PATCH method should...', () => {
  beforeEach(() => 
    populateDB({
      "CAR1580214599567RD121": {
        "created_at": "2020-01-28T12:29:59.567Z",
        "updated_at": "2020-01-28T12:29:59.567Z",
        "car_model": "Relâmpago Marquinhos",
        "description": "O carro mais dahora do mundo.",
        "company": "Disney",
        "price": "US$ 99.000,00",
        "year": "2008",
        "color": "Vermelho BOLADO",
        "image_url": "Sem tempo, irmão."
      }
    })
  )
  afterEach(() => cleanDB())

  test(`return 200 as status code and return the item changed`, async () => {
    expect.assertions(2)

    const res = await request(server.app)
      .patch('/v1/cars/CAR1580214599567RD121')
      .send({
        "price": "US$ 1.000.000,00",
        "year": "1995"
      })

    expect(res.statusCode).toEqual(200)
    expect(res.body).toMatchObject({
      "car_model": "Relâmpago Marquinhos",
      "description": "O carro mais dahora do mundo.",
      "company": "Disney",
      "price": "US$ 1.000.000,00",
      "year": "1995",
      "color": "Vermelho BOLADO",
      "image_url": "Sem tempo, irmão."
    })
  })

  test(`return 404 as status code and error message if the item doesn't exists and couldn't be updated`, async () => {
    expect.assertions(2)

    const res = await request(server.app)
      .patch('/v1/cars/DOESNTEXISTS')
      .send({
        "price": "US$ 1.000.000,00",
        "year": "1995"
      })

    expect(res.statusCode).toEqual(404)
    expect(res.body).toMatchObject({
      error: `The record DOESNTEXISTS couldn't be found.`
    })
  })

  test(`save on database the item changed`, async () => {
    expect.assertions(1)

    const res = await request(server.app)
      .patch('/v1/cars/CAR1580214599567RD121')
      .send({
        "price": "US$ 1.000.000,00",
        "year": "1995"
      })

    const database = openDB()
    const record = database['CAR1580214599567RD121']

    expect(record).toMatchObject({
      "car_model": "Relâmpago Marquinhos",
      "description": "O carro mais dahora do mundo.",
      "company": "Disney",
      "price": "US$ 1.000.000,00",
      "year": "1995",
      "color": "Vermelho BOLADO",
      "image_url": "Sem tempo, irmão."
    })
  })
})

describe('The API on /v1/cars/:id Endpoint at DELETE method should...', () => {
  beforeEach(() => 
    populateDB({
      "CAR1580214599567RD121": {
        "created_at": "2020-01-28T12:29:59.567Z",
        "updated_at": "2020-01-28T12:29:59.567Z",
        "car_model": "Relâmpago Marquinhos",
        "description": "O carro mais dahora do mundo.",
        "company": "Disney",
        "price": "US$ 99.000,00",
        "year": "2008",
        "color": "Vermelho BOLADO",
        "image_url": "Sem tempo, irmão."
      }
    })
  )
  afterEach(() => cleanDB())

  test(`return 204 as status code to a item deleted successfully`, async () => {
    expect.assertions(1)

    const res = await request(server.app)
      .delete('/v1/cars/CAR1580214599567RD121')

    expect(res.statusCode).toEqual(204)
  })

  test(`return 404 as status code and error message if the item doesn't exists and couldn't be deleted`, async () => {
    expect.assertions(2)

    const res = await request(server.app)
      .delete('/v1/cars/DOESNTEXISTS')

    expect(res.statusCode).toEqual(404)
    expect(res.body).toMatchObject({
      error: `The record DOESNTEXISTS couldn't be found.`
    })
  })

  test(`remove from database the item that should be deleted`, async () => {
    expect.assertions(1)

    const res = await request(server.app)
      .delete('/v1/cars/CAR1580214599567RD121')

    const database = openDB()
    const record = database['CAR1580214599567RD121']

    expect(record).toBeUndefined()
  })
})
