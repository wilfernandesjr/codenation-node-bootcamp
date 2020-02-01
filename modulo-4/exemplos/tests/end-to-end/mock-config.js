const path = require('path')
const MOCK_FILE_INFO = {}

MOCK_FILE_INFO[path.resolve(__dirname, './users.json')] = [
  {
    'id': 1,
    'name': 'Cyb',
    'username': 'chastilow0',
    'last_active_date': '2020-01-13T11:18:31Z',
    'gender': 'Female',
    'profile_pic': "https://randomuser.me/api/portraits/women/13.jpg"
  }, {
    'id': 4,
    'name': 'Farica',
    'username': 'fharmant3',
    'last_active_date': '2019-08-28T09:25:19Z',
    'gender': 'Female',
    "profile_pic": "https://randomuser.me/api/portraits/women/13.jpg"

  }, {
    'id': 6,
    'name': 'Ky',
    'username': 'kbuddle5',
    'last_active_date': '2019-12-14T11:08:09Z',
    'gender': 'Male',
    "profile_pic": "https://randomuser.me/api/portraits/women/13.jpg"
  },
];

module.exports = MOCK_FILE_INFO
