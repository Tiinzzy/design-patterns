class Principal {
    static #name;

    constructor(name) {
        Principal.#name = name;
    };


    toString() {
        return Principal.#name;
    }
}

// ----------------------------------------------------------------------
class ClassRoom {
    static #name;

    constructor(name) {
        ClassRoom.#name = name;
    };


    toString() {
        return ClassRoom.#name;
    }
}

// ----------------------------------------------------------------------
class School {
    static #name;
    static #principal;
    static #classRooms;

    constructor(name, manager_name, class_count) {
        School.#name = name;
        School.#principal = new Principal(manager_name);
        School.#classRooms = [];
        for (let i in class_count) {
            School.#classRooms.push(new ClassRoom('class #' + str(i)));
        }
    }

    toString() {
        let school_as_str = `name: ${School.#name}, principal: ${School.#principal.toString()}\n`;
        for (let c of School.#classRooms) {
            school_as_str += ' ' + c.toString() + '\n';
        }
        return school_as_str;
    }
}


// ----------------------------------------------------------------------

let school = new School('Thorn Hill School', 'Mr. bean', 5);
console.log(school.toString());