from enum import Enum


class DoorNumber(Enum):
    UNDEFINED = -1
    TWO = 0
    FOUR = 1


class RoomSize(Enum):
    UNDEFINED = -1
    SMALL = 0
    MEDIUM = 1
    LARGE = 2


class Car:
    def __init__(self):
        self.__room_size = RoomSize.UNDEFINED
        self.__door_number = DoorNumber.UNDEFINED
        self.__build_finished = False

    def show_car_info(self):
        print('Room Size:', self.__room_size)
        print('Door Number:', self.__door_number)

    @staticmethod
    def build_general(room_size, door_number):
        if not isinstance(room_size, RoomSize) or not isinstance(door_number, DoorNumber):
            raise Exception('Wrong type of parameters are passed!')

        car = Car()
        car.room_size = room_size
        car.door_number = door_number
        return car

    @staticmethod
    def build_small_car():
        car = Car()
        car.room_size = RoomSize.SMALL
        car.door_number = DoorNumber.TWO
        return car

    def set_room_size(self, room_size):
        self.__room_size = room_size
        return self

    def set_door_number(self, door_number):
        self.__door_number = door_number
        return self

    @staticmethod
    def builder():
        return Car()

    def build(self):
        self.__build_finished = True
        return self


if __name__ == "__main__":
    c1 = Car.build_general(RoomSize.LARGE, DoorNumber.FOUR)
    c1.show_car_info()

    print('- - - - - - - - - - - - - - - - -')
    c2 = Car.build_small_car()
    c2.show_car_info()

    print('- - - - - - - - - - - - - - - - -')
    c3 = Car.builder().set_room_size(RoomSize.LARGE).set_door_number(DoorNumber.FOUR).build()
    c3.show_car_info()
