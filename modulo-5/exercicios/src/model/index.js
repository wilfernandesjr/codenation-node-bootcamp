const {
  query,
  setValuesToInsert,
  setValuesToUpdate
} = require('../db')

const cars = {
  findAll: async () => {
    const result = await query(`SELECT * FROM cars`)
    return result
  },

  findById: async id => {
    const result = await query(`SELECT * FROM cars WHERE id = ${id}`)
      .then(res => (res.length ? res[0] : {}))

    return result
  },

  create: async data => {
    const values = setValuesToInsert(data)
    const result = await query(`INSERT INTO cars VALUES (${values})`)

    return result
  },

  update: async (data, id) => {
    const values = setValuesToUpdate(data)
    const result = await query(`UPDATE cars SET ${values} WHERE id = ${id}`)

    return result
  },

  delete: async id => await query(`DELETE FROM cars WHERE id = ${id}`)
}


module.exports = { cars }