const users = [
  {
    'id': 1,
    'name': 'Cyb',
    'username': 'chastilow0',
    'last_active_date': '2020-01-13T11:18:31Z',
    'gender': 'Female',
    'profile_pic': 'https://randomuser.me/api/portraits/women/30.jpg'
  },
  {
    'id': 2,
    'name': 'Breena',
    'username': 'bvaughn1',
    'last_active_date': '2019-09-20T07:33:29Z',
    'gender': 'Female',
    'profile_pic': 'https://randomuser.me/api/portraits/women/75.jpg'
  },
  {
    'id': 3,
    'name': 'Wenda',
    'username': 'wjepps2',
    'last_active_date': '2020-01-29T20:21:13Z',
    'gender': 'Female',
    'profile_pic': 'https://randomuser.me/api/portraits/women/99.jpg'
  },
  {
    'id': 4,
    'name': 'Farica',
    'username': 'fharmant3',
    'last_active_date': '2019-08-28T09:25:19Z',
    'gender': 'Female',
    'profile_pic': 'https://randomuser.me/api/portraits/women/91.jpg'
  },
  {
    'id': 5,
    'name': 'Madelyn',
    'username': 'mkegan4',
    'last_active_date': '2019-09-17T18:30:23Z',
    'gender': 'Female',
    'profile_pic': 'https://randomuser.me/api/portraits/women/48.jpg'
  },
  {
    'id': 6,
    'name': 'Ky',
    'username': 'kbuddle5',
    'last_active_date': '2019-12-14T11:08:09Z',
    'gender': 'Male',
    'profile_pic': 'https://randomuser.me/api/portraits/men/21.jpg'
  },
  {
    'id': 7,
    'name': 'Veronique',
    'username': 'vkippins6',
    'last_active_date': '2019-08-31T10:58:47Z',
    'gender': 'Female',
    'profile_pic': 'https://randomuser.me/api/portraits/women/86.jpg'

  },
  {
    'id': 8,
    'name': 'Lorilyn',
    'username': 'lriseborough7',
    'last_active_date': '2019-12-12T00:59:27Z',
    'gender': 'Female',
    'profile_pic': 'https://randomuser.me/api/portraits/women/64.jpg'
  },
  {
    'id': 9,
    'name': 'Andrey',
    'username': 'apurches8',
    'last_active_date': '2019-12-21T17:49:56Z',
    'gender': 'Male',
    'profile_pic': 'https://randomuser.me/api/portraits/men/11.jpg'
  },
  {
    'id': 10,
    'name': 'Lucy',
    'username': 'llaingmaid9',
    'last_active_date': '2019-09-11T11:02:14Z',
    'gender': 'Female',
    'profile_pic': 'https://randomuser.me/api/portraits/women/13.jpg'
  }
]

const getFemaleInactiveUsers = () => {
    const twoMonthsPeriod = 5270400000
    const currentDate = new Date().getTime()

    return users
        .filter(user => {
          const inactivePeriod = currentDate - Date.parse(user.last_active_date)
          const isInactive = inactivePeriod >= twoMonthsPeriod
          const isFemale = user.gender === 'Female'
          return isInactive && isFemale
        })
}

module.exports = getFemaleInactiveUsers
