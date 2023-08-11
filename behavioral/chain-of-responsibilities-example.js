class BuyIngredients {
    static run(inputData) {
        const processResult = `I have ${inputData.money} money and just bought ${JSON.stringify(inputData.ingredients)}`;
        return processResult;
    }
}

// ------------------------------------------------------------------
class Deliver {
    static run(inputData) {
        let processResult = inputData;
        processResult += '\n I have to get a cab and deliver it to restaurant.';
        return processResult;
    }
}

// ------------------------------------------------------------------
class Cook {
    constructor(name) {
        this.name = name;
    }

    run(inputData) {
        let processResult = inputData;
        processResult += `\n Ingredients are delivered, I (${this.name}) cooked the dish and it is ready.`
        return processResult;
    }
}

// ------------------------------------------------------------------
class OrderSalad {
    static run(inputData) {
        let processResult = inputData;
        processResult += `\n Adding salad to my order.`
        return processResult;
    }
}

// ------------------------------------------------------------------
class Chain {
    constructor() {
        this.process = [];
    }

    addProcess(p) {
        this.process.push(p);
    }

    run(init_data) {
        let stepData = init_data;
        for (const p of this.process) {
            stepData = p.run(stepData);
        }
        return stepData;
    }

    clear() {
        this.process = [];
    }
}

// ------------------------------------------------------------------
const data = {'money': 100, 'ingredients': {'flour': 100, 'raisins': 50, 'salt': 5}};

const chain = new Chain();
chain.addProcess(BuyIngredients);
chain.addProcess(new Cook('Tina'));
chain.addProcess(Deliver);

const result = chain.run(data);
console.log(result);

console.log();
console.log('--------------------');
console.log();

chain.clear();
chain.addProcess(BuyIngredients);
chain.addProcess(new Cook('Kamran'));
chain.addProcess(Deliver);

chain.addProcess(OrderSalad);
const result1 = chain.run(data);
console.log(result1);