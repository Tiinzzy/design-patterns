class DoorNumber { }
DoorNumber.UNDEFINED = -1
DoorNumber.TWO = 0
DoorNumber.FOUR = 1


class RoomSize { }
RoomSize.UNDEFINED = -1
RoomSize.SMALL = 0
RoomSize.MEDIUM = 1
RoomSize.LARGE = 2

class Car {
    constructor() {
        this.roomSize = RoomSize.UNDEFINED;
        this.doorNumber = DoorNumber.UNDEFINED;
        this.buildFinished = false;
    }

    showCarInfo() {
        console.log('Room Size:', this.roomSize);
        console.log('Door Number:', this.doorNumber);
    }

    static buildGeneral(room_size, door_number) {
        if (!(Object.keys(RoomSize).hasOwnProperty(room_size)) || !(Object.keys(DoorNumber).hasOwnProperty(door_number))) {
            throw new Error('Wrong type of parameters are passed!');
        }

        const car = new Car();
        car.roomSize = room_size;
        car.doorNumber = door_number;
        return car;
    }

    static buildSmallCar() {
        const car = new Car();
        car.roomSize = RoomSize.SMALL;
        car.doorNumber = DoorNumber.TWO;
        return car;
    }

    set_roomSize(room_size) {
        this.roomSize = room_size;
        return this;
    }

    set_doorNumber(door_number) {
        this.doorNumber = door_number;
        return this;
    }

    static builder() {
        return new Car();
    }

    build() {
        this.buildFinished = true;
        return this;
    }
}


const c1 = Car.buildGeneral(RoomSize.LARGE, DoorNumber.FOUR);
c1.showCarInfo();

console.log('- - - - - - - - - - - - - - - - -');
const c2 = Car.buildSmallCar();
c2.showCarInfo();

console.log('- - - - - - - - - - - - - - - - -');
const c3 = Car.builder().set_roomSize(RoomSize.LARGE).set_doorNumber(DoorNumber.FOUR).build();
c3.showCarInfo();