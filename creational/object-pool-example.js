class Worker {
    constructor(name) {
        this.name = name;
        this.busy = false;
    }

    execute(task, delay) {
        this.busy = true;
        const current_time = new Date().toLocaleTimeString();
        console.log(`\n\n${current_time}: ${this.name}: Executing ${task} (delay=${delay})`);
        setTimeout(() => {
            this.busy = false;
        }, delay * 1000);
    }

    isBusy() {
        return this.busy;
    }

    getName() {
        return this.name;
    }
}

class WorkerPool {
    constructor() {
        this.pool = [];
    }

    add(name) {
        this.pool.push(new Worker(name));
    }

    size() {
        return this.pool.length;
    }

    async runTasks(tasks) {
        const tasksToBeExecuted = {};
        tasks.forEach(t => {
            tasksToBeExecuted[t] = false;
        });

        while (Object.keys(tasksToBeExecuted).length > 0) {
            const toBeDeleted = [];
            for (const t in tasksToBeExecuted) {
                for (const w of this.pool) {
                    if (!w.isBusy()) {
                        w.execute(t, t);
                        toBeDeleted.push(t);
                        break;
                    }
                }
            }
            toBeDeleted.forEach(t => {
                delete tasksToBeExecuted[t];
            });

            await new Promise(resolve => setTimeout(resolve, 0));
        }
    }
}

const wp = new WorkerPool();
wp.add('kamran');
wp.add('tina');
wp.add('kiana');
wp.add('avian');
wp.add('alice');
wp.add('bob');

const allTasks = [1, 3, 10, 2, 6, 7, 4, 5, 8, 9];
wp.runTasks(allTasks).then(() => {
    console.log(`total to be processed time: ${allTasks.reduce((acc, val) => acc + val, 0)}`);
});
