// Dê preferência para funções nativas e declarativas

// RUIM

const filter = arr => {
    const filteredArray = []

    arr.map(item => {
        if (item > 5) {
            filteredArray.push(item)
        }
    })

    return filteredArray
}


// BOM

arr.filter(item => item > 5)


// Evite o uso de flags como parâmetro

// RUIM

function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}


// BOM

function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}
