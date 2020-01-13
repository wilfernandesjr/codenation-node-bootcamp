const { mediaPonderada } = require('./media-ponderada')

describe('A função mediaPonderada...', () => {
  test('deveria retornar 6.4 para notaA e pesoA 8 e 3 e notaB e pesoB 4 e 2', () => {
    const notas = {
      a: 8,
      b: 4
    }
    
    const pesos = {
      a: 3,
      b: 2
    }

    expect(mediaPonderada(notas, pesos)).toBe(6.4)
  })
})