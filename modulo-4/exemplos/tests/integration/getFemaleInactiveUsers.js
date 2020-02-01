const fs = require('fs')
const path = require('path')

const getFemaleInactiveUsers = (request, response) => {
    const twoMonthsPeriod = 5270400000
    const currentDate = new Date().getTime()

    const directory = path.resolve(__dirname, './users.json')
    console.log('TCL: getFemaleInactiveUsers -> directory', directory);

    const users = fs.readFileSync(directory)
    console.log('TCL: getFemaleInactiveUsers -> users', users);

    const parsedUsers = JSON.parse(users)

    const inactiveUsers = parsedUsers
        .filter(user => {
          const inactivePeriod = currentDate - Date.parse(user.last_active_date)
          const isInactive = inactivePeriod >= twoMonthsPeriod
          const isFemale = user.gender === 'Female'
          return isInactive && isFemale
        })

        response.json(inactiveUsers)
}

module.exports = getFemaleInactiveUsers
