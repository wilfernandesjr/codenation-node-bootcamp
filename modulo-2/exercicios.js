// 1. Escreva um algoritmo que mostre um log com a mesma descrição para cada pessoa.
const logEachPerson = people =>
  people.forEach(({ name, language }) => (
    console.log(`${name} desenvolve em ${language.join(' e ')}`)
  ))

// 2. Escreva um algoritmo que retorne um Array onde cada item contém a frase: "{name} desenvolve em {languages}"
const mapPeopleToPhrases = people =>
  people.map(({ name, language }) => (
    `${name} desenvolve em ${language.join(' e ')}`
  ))

// 3. escreva um algoritmo que retorne um Array contendo todas as pessoas que desenvolvem em Javascript.
const filterPeopleByLanguage = (people, languageName) =>
  people.filter(
    ({ language }) => language.includes(languageName)
  )

// 4. Escreva um algoritmo que agrupe as pessoas de acordo com as suas linguagens.
const peopleByLanguage = people =>
  people.reduce((acc, cur) => {
    cur.language.forEach(item => {
      if(!acc[item]) {
        return acc[item] = [cur.name]
      }

      acc[item] = [...acc[item], cur.name]
    })

    return acc
  }, {}) 

module.exports = {
  peopleByLanguage,
  filterPeopleByLanguage,
  mapPeopleToPhrases,
  logEachPerson
}
