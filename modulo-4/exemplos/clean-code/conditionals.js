// Utilize booleanos de forma implicita

// RUIM
const felines = ['cat', 'tiger', 'lion', 'puma', 'jaguar', 'panther']

if (felines.includes('cat') === true) {
    console.log('Cat is a feline')
}

// BOM
const felines = ['cat', 'tiger', 'lion', 'puma', 'jaguar', 'panther']

if (felines.includes('cat')) {
    console.log('Cat is a feline')
}


// Evite condicionais negativas

// RUIM
const shouldNotProccess = () => false

if (!shouldNotProccess()) {
    // …
}

// BOM
const shouldProccess = () => false

if (!shouldProccess()) {
    // …
}


// Encapsule condicionais

// RUIM
if (1 === '1') {
  // ...
}

// BOM
const isOneEqualStringOne = 1 === '1'

if (isOneEqualStringOne) {
  // …
}
