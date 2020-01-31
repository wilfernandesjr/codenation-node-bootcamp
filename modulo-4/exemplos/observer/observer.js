class Subject {
  constructor() {
    this.observers = []

  subscribe(fn) {
    this.observers.push(fn)
  }

  unsubscribe(fnToRemove) {
    this.observers = this.observers.filter( fn => fn != fnToRemove)
  }

  fire() {
    this.observers.forEach(fn => fn())
  }
}

const subject = new Subject()

function Observer1() {
  console.log("Observer 1 Firing!")
}

function Observer2() {
  console.log("Observer 2 Firing!")
}

subject.subscribe(Observer1)
subject.subscribe(Observer2)
subject.fire()

subject.unsubscribe(Observer1)
subject.fire()
