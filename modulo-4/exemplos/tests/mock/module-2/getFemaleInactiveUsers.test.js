const getFemaleInactiveUsers = require('./getFemaleInactiveUsers')
const MOCK_FILE_INFO = require('./mock-config')

jest.mock('fs');

describe('', () => {
  beforeEach(() => {
    require('fs').__setMockFiles(MOCK_FILE_INFO)
  })

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

})
