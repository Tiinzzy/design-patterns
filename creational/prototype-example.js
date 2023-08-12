class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }

    increaseAge() {
        this.age += 1;
    }

    clone() {
        const temporary = new Person(this.name, this.age);
        return temporary;
    }
}

// ------------------------------------------------------------------
const p1 = new Person('Tina', 26);
p2 = p1.clone();

p1.toString();
p2.toString();

p1.increaseAge();

p1.toString();
p2.toString();