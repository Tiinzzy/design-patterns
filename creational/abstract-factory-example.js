let constructors = {};

// ----------------------------------------------------------------------
class Condo {
    building = "This is Condo";

    get() {
        return this.building;
    }
}
constructors.Condo = Condo;

// ----------------------------------------------------------------------
class House {
    building = "This is House";

    get() {
        return this.building;
    }
}
constructors.House = House;

// ----------------------------------------------------------------------
class Hotel {
    building = "This is Hotel";

    get() {
        return this.building;
    }
}
constructors.Hotel = Hotel;

// ----------------------------------------------------------------------
class Shop {
    building = "This is Shop";

    get() {
        return this.building;
    }
}
constructors.Shop = Shop;

// ----------------------------------------------------------------------
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

    static getBuilding(type) {
        if (Object.keys(constructors).indexOf(type) === -1) {
            throw new Error(`Our factory doesn't carry this type: ${type}!`);
        } else {
            return new constructors[type]();
        }
    }
}

// ----------------------------------------------------------------------
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