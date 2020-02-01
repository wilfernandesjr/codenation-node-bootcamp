jest.mock('../users.json', () => ([
  {
    'id': 1,
    'name': 'Cyb',
    'username': 'chastilow0',
    'last_active_date': '2020-01-13T11:18:31Z',
    'gender': 'Female'
  }, {
    'id': 4,
    'name': 'Farica',
    'username': 'fharmant3',
    'last_active_date': '2019-08-28T09:25:19Z',
    'gender': 'Female'
  }, {
    'id': 6,
    'name': 'Ky',
    'username': 'kbuddle5',
    'last_active_date': '2019-12-14T11:08:09Z',
    'gender': 'Male'
  },
]))

const getFemaleInactiveUsers = require('./getFemaleInactiveUsers')


test('Should return only female inactive users', () => {
  const expected = [
    {
      id: 4,
      name: 'Farica',
      username: 'fharmant3',
      last_active_date: '2019-08-28T09:25:19Z',
      gender: 'Female'
    }
  ]

  expect(getFemaleInactiveUsers()).toEqual(expected)
})
