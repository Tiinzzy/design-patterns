function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

class Button {
    html = "<button></button>";

    get() {
        return this.html;
    }
}

class Image {
    html = "<img></img>";

    get() {
        return this.html;
    }
}

class Input {
    html = "<input></input>";

    get() {
        return this.html;
    }
}

class TagFactory {
    static create(typ) {
        if (capitalizeFirstLetter(typ) === "Image") {
            return new Image();
        } else if (capitalizeFirstLetter(typ) === "Input") {
            return new Input();
        } else if (capitalizeFirstLetter(typ) === "Button") {
            return new Button();
        } else {
            throw new Error(`Our factory doesn't carry this type: ${typ}!`)
        }
    }
}


console.log(new Button().get());
console.log(new Input().get());
console.log(new Image().get());

console.log('- - - - - - - - -');
console.log(TagFactory.create('Image').get());
console.log('- - - - - - - - -');

const elements = ['image', 'input', 'banana'];
for (let i in elements) {
    console.log(TagFactory.create(elements[i]).get());
}


