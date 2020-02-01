const getFemaleInactiveUsers = require('./getFemaleInactiveUsers')

test('Should return only female inactive users', () => {
  const expected = [
    {
      id: 2,
      name: 'Breena',
      username: 'bvaughn1',
      last_active_date: '2019-09-20T07:33:29Z',
      gender: 'Female',
      profile_pic: 'https://randomuser.me/api/portraits/women/75.jpg',
    },
    {
      id: 4,
      name: 'Farica',
      username: 'fharmant3',
      last_active_date: '2019-08-28T09:25:19Z',
      gender: 'Female',
      profile_pic: 'https://randomuser.me/api/portraits/women/91.jpg',
    },
    {
      id: 5,
      name: 'Madelyn',
      username: 'mkegan4',
      last_active_date: '2019-09-17T18:30:23Z',
      gender: 'Female',
      profile_pic: 'https://randomuser.me/api/portraits/women/48.jpg',

    },
    {
      id: 7,
      name: 'Veronique',
      username: 'vkippins6',
      last_active_date: '2019-08-31T10:58:47Z',
      gender: 'Female',
      profile_pic: 'https://randomuser.me/api/portraits/women/86.jpg',
    },
    {
      id: 10,
      name: 'Lucy',
      username: 'llaingmaid9',
      last_active_date: '2019-09-11T11:02:14Z',
      gender: 'Female',
      profile_pic: 'https://randomuser.me/api/portraits/women/13.jpg',
    }
  ]

  expect(getFemaleInactiveUsers()).toEqual(expected)
})
