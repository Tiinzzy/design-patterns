function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

class Condo {
    building = "This is Condo";

    get() {
        return this.building;
    }
}


class House {
    building = "This is House";

    get() {
        return this.building;
    }
}


class Hotel {
    building = "This is Hotel";

    get() {
        return this.building;
    }
}


class Shop {
    building = "This is Shop";

    get() {
        return this.building;
    }
}

class BuildingFactory {
    static getCondo() {
        return new Condo();
    }

    static getHouse() {
        return new House();
    }

    static getHotel() {
        return new Hotel();

    }

    static getShop() {
        return new Shop();

    }

    static getBuilding(typ) {
        if (capitalizeFirstLetter(typ) === "Condo") {
            return new Condo();
        } else if (capitalizeFirstLetter(typ) === "House") {
            return new House();
        } else if (capitalizeFirstLetter(typ) === "Hotel") {
            return new Hotel();
        } else if (capitalizeFirstLetter(typ) === "Shop") {
            return new Shop();
        } else {
            throw new Error(`Our factory doesn't carry this type: ${typ}!`)
        }
    }
}

const userRequest = ['Condo', 'Shop'];
for (let i in userRequest) {
    console.log(BuildingFactory.getBuilding(userRequest[i]).get());
}

console.log('- - - - - - - -');

let user_properties = [new Condo(), new Shop()];
console.log(user_properties);

console.log('- - - - - - - -');

let newRequest = BuildingFactory.getHotel().get();
console.log(newRequest);