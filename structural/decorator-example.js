class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log(this.name, this.age);
    }

    print() { }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

// ----------------------------------------------------------------------
class DecoratedPerson extends Person {
    show() {
        console.log(`Name:${this.getName()}, Age:${this.getAge()}`);
    }

    print() {
    }
}

// ----------------------------------------------------------------------
let p = new Person('Alice', 23);
p.show();

let dp = new DecoratedPerson('Bob', 18);
dp.show();