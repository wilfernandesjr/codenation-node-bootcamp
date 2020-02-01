const path = require('path')
const fs = jest.genMockFromModule('fs')

const mockFiles = {}

function __setMockFiles(files) {
  for (const file in files) {
    mockFiles[file] = files[file]
  }
}

function readFileSync(directoryPath) {
  return mockFiles[directoryPath] || []
}

fs.__setMockFiles = __setMockFiles
fs.readFileSync = readFileSync

module.exports = fs
