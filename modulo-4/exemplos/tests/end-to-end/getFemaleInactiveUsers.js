const fs = require('fs')
const path = require('path')
const { toHTML } = require('./template')

const getFemaleInactiveUsers = (request, response) => {
    const twoMonthsPeriod = 5270400000
    const currentDate = new Date().getTime()
    const directory = path.resolve(__dirname, './users.json')
    const users = fs.readFileSync(directory, 'utf-8')
    const parsedUsers = typeof users === 'string' ? JSON.parse(users) : users

    const inactiveUsers = parsedUsers
        .filter(user => {
          const inactivePeriod = currentDate - Date.parse(user.last_active_date)
          const isInactive = inactivePeriod >= twoMonthsPeriod
          const isFemale = user.gender === 'Female'
          return isInactive && isFemale
        })

    response.send(toHTML(inactiveUsers))
}

module.exports = getFemaleInactiveUsers
