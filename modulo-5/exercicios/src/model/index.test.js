// Unit Tests Scenarios for Model of Cars API

const { cars: {
  findAll,
  findById,
  update,
  create,
  destroy
} } = require('./index')

describe('Method findAll should...', () => {
  test('return all records on database', async () => {
    // ...
  })
})

describe('Method findById should...', () => {
  test('return the properly record based on the id passed', async () => {
    // ...
  })

  test('return undefined when the record has not been found', async () => {
    // ...
  })
})

describe('Method update should...', () => {
  test('update a record and return it updated', async () => {
    // ...
  })

  test('return null if record not founded in database', async () => {
    // ...
  })
})

describe('Method create should...', () => {
  test('create a new record in database and return it', async () => {
    // ...
  })

  test('return an object with properly keys', async () => {
    // ...
  })
})

describe('Method destroy should...', () => {
  // ...
})

describe('Method updateDB should...', () => {
  // ...
})
