/*
Dada uma lista de números de 0 a 20, escreva um algoritmo que separe os números pares dos números ímpares.
Conhecimentos utilizados: estrutura de decisão, estrutura de repetição, operadores aritméticos.
*/

const oddOrEven = function () {
  let result = {
    pares: [],
    impares: []
  }

  for (let i = 0; i <= 20; i++) {
    const resto = i % 2

    if (resto) {
      result.impares.push(i)
    } else {
      result.pares.push(i)
    }
  }

  return result
}

module.exports = oddOrEven
