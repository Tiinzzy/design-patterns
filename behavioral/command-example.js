class CmdKill {

    constructor(name) {
        this.name = name;
    }

    run(...args) {
        console.log(`${this.name} is being killed at ${args[0]}!`);
    }
}

// ---------------------------------------------------------
class CmdBeat {
    constructor(name) {
        this.name = name
    }

    run(...args) {
        console.log(`${this.name} is being beaten at ${args[0][0]}, ${args[0][1]} times`)
    }
}

// ---------------------------------------------------------
class Invoker0 {

    constructor(cmd, ...args) {
        this.cmd = cmd;
        this.args = args;
    }

    invoke() {
        this.cmd.run(this.args);
    }
}

// ---------------------------------------------------------
class Invoker1 {

    static invoke(cmd, ...args) {
        cmd.run(args);
    }
}


// ---------------------------------------------------------
class Invoker2 {
    constructor() {
        this.cmd = null;
        this.args = null;
    }

    set(cmd, ...args) {
        this.cmd = cmd;
        this.args = args;
    }

    invoke() {
        this.cmd.run(this.args);
    }

}

// ---------------------------------------------------------
let c = new CmdKill('tina');
c.run('10:13');

console.log('- - - - - - - - - - - - - - - -');

let i1 = new Invoker1();
Invoker1.invoke(new CmdBeat('kamran'), '10:10', 2);
Invoker1.invoke(new CmdKill('kamran'), '10:13');

console.log('- - - - - - - - - - - - - - - -');

i1 = new Invoker2();
i1.set(new CmdBeat('kamran'), '10:10', 2);
i1.invoke();

i1.set(new CmdKill('kamran'), '10:13');
i1.invoke();

console.log('- - - - - - - - - - - - - - - -');

i1 = new Invoker0(new CmdBeat('kamran'), '10:10', 2);
i1.invoke();

i2 = new Invoker0(new CmdKill('kamran'), '10:13');
i2.invoke();