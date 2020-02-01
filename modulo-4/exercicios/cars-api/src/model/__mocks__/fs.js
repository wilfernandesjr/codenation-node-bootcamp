module.exports = {
  writeFileSync: (path, data, unicode) => {
    if (typeof data === 'undefined') {
      throw 'Example of error'
    }

    return true
  }
}
