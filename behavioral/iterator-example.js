const NOT_DONE = 'not-yet-done';
const DONE = 'completed';


class Task {

    constructor(title) {
        this.title = title;
        this.status = NOT_DONE;
    }

    toString() {
        return `${this.title}, ${this.status}`;
    }

    get() {
        return this.title;
    }

    isDone() {
        return this.status === DONE;
    }

    run() {
        this.status = DONE;
    }

    reset() {
        this.status = NOT_DONE
    }
}

// ---------------------------------------------------------
class Tasks {

    constructor() {
        this.tasks = [];
        this.iteratorIndex = 0;
    }


    getTasks() {
        return this.tasks;
    }

    add(title) {
        this.tasks.push(new Task(title));
    }

    show() {
        const taskStrings = this.tasks.map(t => t.toString());
        console.log(taskStrings.join('\n'));
    }

    nextTask() {
        if (this.iteratorIndex < this.tasks.length) {
            this.iteratorIndex += 1;
            return this.tasks[this.iteratorIndex - 1];
        } else {
            return null;
        }
    }

    reset() {
        this.iteratorIndex = 0;
        for (let task of this.tasks) {
            task.reset();
        }
    }
}

// ---------------------------------------------------------
function doSomethingWithTask(task) {
    if (!task.isDone()) {
        console.log('I am doing something difficult on this task => ', task.toString());
        task.run();
        console.log('I am done with task => ', task.toString());
        console.log();
    }
}

// ---------------------------------------------------------
let tasks = new Tasks()

tasks.add('face cleaning');
tasks.add('take a bath');
tasks.add('have breakfast');

tasks.show()

console.log('- - - - - - - - - - - - - - - -');

for (let task of tasks.getTasks()) {
    doSomethingWithTask(task);
}

console.log('- - - - - - - - - - - - - - - -');

tasks.reset()
let tt = tasks.nextTask();
while (tt !== null) {
    doSomethingWithTask(tt);
    tt = tasks.nextTask();
}