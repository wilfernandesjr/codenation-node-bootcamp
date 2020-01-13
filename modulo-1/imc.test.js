const { calcImc } = require('./imc')

describe('A função calcImc deveria...', () => {
  test('retornar "muito abaixo do peso" para uma altura e peso de alguém muito abaixo do peso', () => {
    expect(calcImc(40, 1.7)).toBe('muito abaixo do peso')
  })

  test('retornar "abaixo do peso" para uma altura e peso de alguém abaixo do peso', () => {
    expect(calcImc(50, 1.7)).toBe('abaixo do peso')
  })

  test('retornar "peso normal" para uma altura e peso de alguém peso normal', () => {
    expect(calcImc(60, 1.7)).toBe('peso normal')
  })

  test('retornar "acima do peso" para uma altura e peso de alguém acima do peso', () => {
    expect(calcImc(75, 1.7)).toBe('acima do peso')
  })

  test('retornar "obesidade I" para uma altura e peso de alguém obesidade I', () => {
    expect(calcImc(100, 1.8)).toBe('obesidade I')
  })

  test('retornar "obesidade II - severa" para uma altura e peso de alguém obesidade II - severa', () => {
    expect(calcImc(124, 1.8)).toBe('obesidade II - severa')
  })

  test('retornar "obesidade III - mórbida" para uma altura e peso de alguém obesidade III - mórbida', () => {
    expect(calcImc(140, 1.8)).toBe('obesidade III - mórbida')
  })
})