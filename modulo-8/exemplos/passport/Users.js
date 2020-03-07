const usersList = [
  {
    username: "evemontalvao",
    password: "password"
  }
]

const users = {
  findOne({ username, password }, callback) {
    console.log("findOne -> username", username)
    const user = usersList.filter(user => user.username === username && user.password === password)

    if(!user.length) {
      return callback({
        message: "Incorrect Information"
      }, null)
    }

    return callback(null, user)
  }
}

module.exports = users
