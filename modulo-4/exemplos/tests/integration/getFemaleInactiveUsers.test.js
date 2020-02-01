const request = require('supertest')
const app = require('./index')
const MOCK_FILE_INFO = require('./mock-config')

jest.mock('fs');

describe('', () => {
  beforeEach(() => {
    require('fs').__setMockFiles(MOCK_FILE_INFO)
  })

  test('Should return a JSON with status 200', async () => {
    const expected = [
      {
        id: 4,
        name: 'Farica',
        username: 'fharmant3',
        last_active_date: '2019-08-28T09:25:19Z',
        gender: 'Female'
      }
    ]

    const res = await request(app)
      .get('/female-inactive')

    expect(res.statusCode).toBe(200)
  })
})
