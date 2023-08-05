class Counter {
  static #instance = null
  
  constructor() {
    if (Counter.#instance) {
      throw new Error("You can only create one instance!")
    }
    this.counter = 0
  }

  static getInstance() {
    if (Counter.#instance === null) {
      Counter.#instance = new Counter()
    }
    return Counter.#instance
  }

  increment() {
    return ++this.counter
  }

  decrement() {
    return --this.counter
  }

  getValue() {
    return this.counter
  }
}


let instance = Counter.getInstance()

console.log(instance.getValue())

instance.increment()
instance.increment()
instance.increment()
console.log(instance.getValue())


console.log(Counter.getInstance().getValue())