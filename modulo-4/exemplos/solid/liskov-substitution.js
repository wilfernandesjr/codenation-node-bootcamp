class Payment {
  constructor(amount) {
    this.amount = amount
  }

  getAmount() {
    return this.amount
  }
}

class CreditCardPayment extends Payment {
  getAmount() {
    return this.amount
  }
}

const payment = new Payment(50)
const creditCardPayment = new Payment(50)

function logAmount(paymentType) {
    return paymentType.getAmount()
}

logAmount(payment)
logAmount(creditCardPayment)

// Exemplos que quebram a regra de substituição de Liskov

// Sobrescrever/implementar um método que não faz nada
class CreditCardPayment extends Payment {
  getAmount() {}
}

// Lançar uma exceção inesperada
class CreditCardPayment extends Payment {
  getAmount() {
    if(!this.amount) {
      throw new Error('No amount to be paid')
    }
  }
}

// Retornar valores de tipos diferentes da classe base
class CreditCardPayment extends Payment {
  getAmount() {
    return this.amount.toString()
  }
}
