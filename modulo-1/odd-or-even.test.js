const oddOrEven = require('./odd-or-even')

describe('A função oddOrEven deveria...', () => {
  test('retornar um objeto com uma lista dos números pares entre 0 e 20', () => {
    expect(oddOrEven()).toMatchObject({
      pares: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    })
  })

  test('retornar uma um objeto com uma lista dos números impares entre 0 e 20', () => {
    expect(oddOrEven()).toMatchObject({
      impares: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    })
  })
})
