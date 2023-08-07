let constructors = {};


// ----------------------------------------------------------------------
class Button {
    html = "<button></button>";

    get() {
        return this.html;
    }
}
constructors.Button = Button;

// ----------------------------------------------------------------------
class Image {
    html = "<img></img>";

    get() {
        return this.html;
    }
}
constructors.Image = Image;

// ----------------------------------------------------------------------
class Input {
    html = "<input></input>";

    get() {
        return this.html;
    }
}
constructors.Input = Input;


// ----------------------------------------------------------------------
class TagFactory {
    static create(type) {
        if (Object.keys(constructors).indexOf(type) === -1) {
            throw new Error(`Our factory doesn't carry this type: ${type}!`);
        } else {
            return new constructors[type]();
        }
    }
}


// ----------------------------------------------------------------------
console.log(new Button().get());
console.log(new Input().get());
console.log(new Image().get());

console.log('- - - - - - - - -');
console.log(TagFactory.create('Image').get());
console.log('- - - - - - - - -');

const elements = ['Button', 'Input'];
for (let i in elements) {
    console.log(TagFactory.create(elements[i]).get());
}


