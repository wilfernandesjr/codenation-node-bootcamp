const request = require('supertest')
const server = require('./express')

describe('Movies Project deveria...', () => {
  test('na rota /movies/3 retornar o conteúdo html equivalente à essa rota', async () => {
    const res = await request(server.app)
      .get('/movies/3')

    expect(res.status).toBe(200)
    expect(res.text).toContain('M. Night Shyamalan')
    expect(res.text).toContain('Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.')
    expect(res.text).toContain('157606')
  })

  test('na rota /api/movies/:id retornar o conteúdo em json do filme equivalente', async () => {
    const res = await request(server.app)
      .get('/api/movies/1')

    expect(res.status).toBe(200)
    expect(res.body).toMatchObject({
      "rank": "1",
      "title": "Guardians of the Galaxy",
      "genre": "Action,Adventure,Sci-Fi",
      "description": "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.",
      "director": "James Gunn",
      "actors": "Chris Pratt, Vin Diesel, Bradley Cooper, Zoe Saldana",
      "year": "2014",
      "runtime": "121",
      "rating": "8.1",
      "votes": "757074",
      "revenue": "333.13",
      "metascore": "76"
    })
  })
})
