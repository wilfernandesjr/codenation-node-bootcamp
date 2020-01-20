const { q1 } = require('./index');

describe('Processando os dados do fifa...', () => {
  test('a função q1 deveria retornar o número de nacionalidades distintas no arquivo', () => {
    const result = q1()

    expect(typeof result).toBe('number')
    expect(result).toBe(164)
  })
})