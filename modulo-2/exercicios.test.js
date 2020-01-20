const {
  logEachPerson,
  filterPeopleByLanguage,
  mapPeopleToPhrases,
  peopleByLanguage
} = require('./exercicios')

const people = [
  {
    "name": "Luiz",
    "language": ["Kotlin", "Java"]
  },
  {
    "name": "Fernanda",
    "language": ["Ruby", "Haskell"]
  },
  {
    "name": "Maria Alice",
    "language": ["Python", "C#", "Javascript"]
  },
  {
    "name": "Renan",
    "language": ["Javascript", "Ruby"]
  },
  {
    "name": "Luciana",
    "language": ["Swift", "C++"]
  },
  {
    "name": "Fabio",
    "language": ["Java", "C++"]
  },
  {
    "name": "Melissa",
    "language": ["Clojure", "Haskell"]
  },
  {
    "name": "Carolina",
    "language": ["Python", "Javascript"]
  },
  {
    "name": "Armando",
    "language": ["Ruby", "Java", "Javascript"]
  },
  {
    "name": "Jaqueline",
    "language": ["PHP", "Ruby"]
  },
  {
    "name": "Thais",
    "language": ["Javascript", "Clojure"]
  }
]

describe('O método logEachPerson deveria...', () => {
  test('loggar no console as frases com as linguagens que as pessoas programam', () => {
    const spy = jest.spyOn(global.console, 'log')

    logEachPerson(people)

    expect(spy).toBeCalledWith('Luiz desenvolve em Kotlin e Java')
    expect(spy).toBeCalledWith('Fernanda desenvolve em Ruby e Haskell')
    expect(spy).toBeCalledWith('Maria Alice desenvolve em Python e C# e Javascript')
    expect(spy).toBeCalledWith('Renan desenvolve em Javascript e Ruby')
    expect(spy).toBeCalledWith('Luciana desenvolve em Swift e C++')
    expect(spy).toBeCalledWith('Fabio desenvolve em Java e C++')
    expect(spy).toBeCalledWith('Melissa desenvolve em Clojure e Haskell')
    expect(spy).toBeCalledWith('Carolina desenvolve em Python e Javascript')
    expect(spy).toBeCalledWith('Armando desenvolve em Ruby e Java e Javascript')
    expect(spy).toBeCalledWith('Jaqueline desenvolve em PHP e Ruby')
    expect(spy).toBeCalledWith('Thais desenvolve em Javascript e Clojure')
  })
})

describe('O método filterPeopleByLanguage deveria...', () => {
  test('retornar somente as pessoas que programam na linguagem passada como parâmetro', () => {
    const resultForHaskell = filterPeopleByLanguage(people, 'Haskell')
    expect(resultForHaskell).toMatchObject([
      { name: "Fernanda", language: ['Ruby', 'Haskell'] },
      { name: 'Melissa', language: ['Clojure', 'Haskell'] }
    ])

    const resultForClojure = filterPeopleByLanguage(people, 'Clojure')
    expect(resultForClojure).toMatchObject([
      { name: 'Melissa', language: ['Clojure', 'Haskell'] },
      { name: 'Thais', language: ['Javascript', 'Clojure'] }
    ])
  })
})

describe('O método mapPeopleToPhrases deveria...', () => {
  test('retornar uma lista de frases com as linguagens que as pessoas program', () => {
    const result = mapPeopleToPhrases(people)
    expect(result).toMatchObject([
      'Luiz desenvolve em Kotlin e Java',
      'Fernanda desenvolve em Ruby e Haskell',
      'Maria Alice desenvolve em Python e C# e Javascript',
      'Renan desenvolve em Javascript e Ruby',
      'Luciana desenvolve em Swift e C++',
      'Fabio desenvolve em Java e C++',
      'Melissa desenvolve em Clojure e Haskell',
      'Carolina desenvolve em Python e Javascript',
      'Armando desenvolve em Ruby e Java e Javascript',
      'Jaqueline desenvolve em PHP e Ruby',
      'Thais desenvolve em Javascript e Clojure'
    ])
  })
})


describe('O método peopleByLanguage deveria...', () => {
  test('retornar um objeto com as linguagens de programação como chave', () => {
    const result = peopleByLanguage(people)

    expect(Object.keys(result))
      .toMatchObject(
        ['Kotlin', 'Java', 'Ruby', 'Haskell', 'Python', 'C#', 'Javascript', 'Swift', 'C++', 'Clojure', 'PHP']
      )
  })

  test('retornar um objeto com as pessoas que programam em cada linguagem', () => {
    const result = peopleByLanguage(people)

    expect(result).toMatchObject({
      Kotlin: ['Luiz'],
      Java: ['Luiz', 'Fabio', 'Armando'],
      Ruby: ['Fernanda', 'Renan', 'Armando', 'Jaqueline'],
      Haskell: ['Fernanda', 'Melissa'],
      Python: ['Maria Alice', 'Carolina'],
      'C#': ['Maria Alice'],
      Javascript: ['Maria Alice', 'Renan', 'Carolina', 'Armando', 'Thais'],
      Swift: ['Luciana'],
      'C++': ['Luciana', 'Fabio'],
      Clojure: ['Melissa', 'Thais'],
      PHP: ['Jaqueline']
    })
  })
})