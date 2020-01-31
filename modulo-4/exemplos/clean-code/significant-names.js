// RUIM
function month() {
  const m = new Date().getUTCMonth() + 1

  if(m === 7) {
      console.log('Hey, it\'s your birthday month!')
  }

  return m
}

month()

// BOM

const birthdayMonthNumber = 7

function getCurrentMonth() {
    const currentMonthNumber = new Date().getUTCMonth() + 1

    if(currentMonthNumber === birthdayMonthNumber) {
        console.log('Hey, it\'s your birthday month! ')
    }

    return currentMonthNumber
}

getCurrentMonth()
