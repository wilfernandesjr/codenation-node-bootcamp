const request = require('supertest')
const server = require('../src/app')
const db = require('../src/models')

beforeAll(async () => {
  await db.sequelize.query('DROP TABLE IF EXISTS players;')
  await db.sequelize.query('DROP TABLE IF EXISTS teams;')
  await db.sequelize.sync()
})

afterAll(async () => {
  await db.sequelize.query('DROP TABLE IF EXISTS players;')
  await db.sequelize.query('DROP TABLE IF EXISTS teams;')
  await db.sequelize.close()
})

describe('The API on /v1/teams Endpoint at GET method should...', () => {
  beforeEach(async () => {
    // ...
  })

  afterEach(async () => {
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0;')
    await db.sequelize.query('TRUNCATE TABLE players;')
    await db.sequelize.query('TRUNCATE TABLE teams;')
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1;')
  })

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

describe('The API on /v1/teams/:teamId Endpoint at GET method should...', () => {
  beforeEach(async () => {
    // ...
  })

  afterEach(async () => {
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0;')
    await db.sequelize.query('TRUNCATE TABLE players;')
    await db.sequelize.query('TRUNCATE TABLE teams;')
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1;')
  })

  test(`return 200 as status code and have properly attributes`, async () => {
    // ...
  })

  test(`return 200 as status code and the item founded`, async () => {
   // ...
  })
})

describe('The API on /v1/teams/:teamId/players Endpoint at GET method should...', () => {
  beforeEach(async () => {
    // ...
  })

  afterEach(async () => {
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0;')
    await db.sequelize.query('TRUNCATE TABLE players;')
    await db.sequelize.query('TRUNCATE TABLE teams;')
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1;')
  })

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

describe('The API on /v1/teams Endpoint at POST method should...', () => {
  afterEach(async () => {
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0;')
    await db.sequelize.query('TRUNCATE TABLE players;')
    await db.sequelize.query('TRUNCATE TABLE teams;')
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1;')
  })

  test(`return 201 as status code and the new record created properties`, async () => {
    // ...
  })

  test(`return the new record created`, async () => {
    // ...
  })
})

describe('The API on /v1/players Endpoint at GET method should...', () => {
  beforeEach(async () => {
    // ...
  })

  afterEach(async () => {
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0;')
    await db.sequelize.query('TRUNCATE TABLE players;')
    await db.sequelize.query('TRUNCATE TABLE teams;')
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1;')
  })

  test(`return 200 as status code and have 'total' and 'data' as properties`, async () => {
    // ...
  })

  test('return the right number of items and an object with all items', async () => {
    // ...
  })

  test(`return the 'data' property with all items from DB`, async () => {
    // ...
  })

  test(`return only brazilian players if uses query parameter 'nationality' on request`, async () => {
    // ...
  })

  test(`return only players with score equal or greather than 90 if uses query parameter 'score' on request`, async () => {
    // ...
  })
})

describe('The API on /v1/players/:playerId Endpoint at GET method should...', () => {
  beforeEach(async () => {
    // ...
  })

  afterEach(async () => {
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0;')
    await db.sequelize.query('TRUNCATE TABLE players;')
    await db.sequelize.query('TRUNCATE TABLE teams;')
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1;')
  })

  test(`return 200 as status code and have properly attributes`, async () => {
    // ...
  })

  test(`return 200 as status code and the item founded`, async () => {
    // ...
  })
})

describe('The API on /v1/players Endpoint at POST method should...', () => {
  beforeEach(async () => {
    // ...
  })

  afterEach(async () => {
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 0;')
    await db.sequelize.query('TRUNCATE TABLE players;')
    await db.sequelize.query('TRUNCATE TABLE teams;')
    await db.sequelize.query('SET FOREIGN_KEY_CHECKS = 1;')
  })

  test(`return 201 as status code and the new record created properties`, async () => {
    // ...
  })

  test(`return the new record created`, async () => {
    // ...
  })
})