const users = require('../users.json')

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
