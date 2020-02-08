// Integration Tests Scenarios for Cars API

const request = require('supertest')
const server = require('../src/server')

beforeAll(() => {})
afterAll(() => {})
beforeEach(() => {})
afterEach(() => {})

describe('The API on /v1/cars Endpoint at GET method should...', () => {
  test(`return 200 as status code and have 'total' and 'data' as properties`, async () => {
    // ...
  })

  test('return the right number of items and an object with all items', async () => {
    // ...
  })

  test(`return the 'data' property with all items from DB`, async () => {
    // ...
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
