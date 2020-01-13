/*
  Desenvolva um programa que leia o peso (em kg) e altura (em metros) e em seguida calcule o IMC e mostre qual a situação do adulto de acordo com a tabela.
  Conhecimentos utilizados: Estrutura de decisão, operadores aritméticos, operadores de comparação,   operadores lógicos e funções.
*/

function calcImc (weight, height) {
  const imc = weight / (height * height)

  if (imc < 17) {
    return 'muito abaixo do peso'
  } else if (imc <= 18.49) {
    return 'abaixo do peso'
  } else if (imc <= 24.99) {
    return 'peso normal'
  } else if (imc <= 29.99) {
    return 'acima do peso'
  } else if (imc <= 34.99) {
    return 'obesidade I'
  } else if (imc <= 39.99) {
    return 'obesidade II - severa'
  } else {
    return 'obesidade III - mórbida'
  }
}

module.exports = { calcImc }