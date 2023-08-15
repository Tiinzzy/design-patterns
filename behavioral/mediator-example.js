class Shop {
    constructor(name) {
        this.name = name;
        this.product = null;
    }


    order(product) {
        this.product = product;
    }

    toString() {
        return `name:${this.name} , product:${this.product}`;
    }
}

// ---------------------------------------------------------
class Delivery {

    static collect(merchandises) {
        for (let m of merchandises) {
            console.log(m.toString());
        }
    }
}

// ---------------------------------------------------------
class Mediator {
    static shopCollect(merchandises) {
        const shops = [];
        for (let m of merchandises) {
            let s = new Shop(m.shop);
            s.order(m.product);
            shops.push(s);
        }
        Delivery.collect(shops);
    }
}

// ---------------------------------------------------------
const zara = new Shop('Zarah');
zara.order('that green cool dress');

const brown = new Shop('Brown');
brown.order('cutey shoes');

Delivery.collect([zara, brown]);

console.log('- - - - - - - - - - - - - - -');

Mediator.shopCollect([
    { shop: 'Zarah', product: 'that green cool dress' },
    { shop: 'Brown', product: 'cutey shoes' }
]);

