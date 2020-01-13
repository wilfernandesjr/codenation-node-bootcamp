/*
Você deverá criar um arquivo chamado media-ponderada.js e, dentro dele, calcular a média ponderada das notas abaixo. Para calcular a média ponderada você deve multiplicar cada nota pelo seu peso e em seguida dividir a soma pela soma dos pesos. 
Conhecimentos utilizados: Variáveis, Operadores Aritméticos
*/

function mediaPonderada (notas, pesos) {
  const result = (
    (notas.a * pesos.a) + (notas.b * pesos.b )
  ) / (pesos.a + pesos.b)

  return result
}

module.exports = { mediaPonderada }
