const request = require('supertest')
const server = require('./express')

describe('Movies Project should...', () => {
  test('/movie/3', async () => {
    const res = await request(server.app)
      .get('/movie/3')
  })

  test('/api/movies/:id', async () => {
    const res = await request(server.app)
      .get('/api/movies/1')
  })
})
