class Condo:
    pass


class House:
    pass


class Hotel:
    pass


class Shop:
    pass


class BuildingFactory:
    @staticmethod
    def get_hotel():
        return Hotel()

    @staticmethod
    def get_shop():
        return Shop()

    @staticmethod
    def get_house():
        return House()

    @staticmethod
    def get_condo():
        return Condo()

    @staticmethod
    def get_building(typ):
        return globals()[typ]() if typ in globals().keys() else None


if __name__ == "__main__":
    user_request = ['Condo', 'Shop']
    user_properties = [BuildingFactory.get_building(t) for t in user_request]
    print(user_properties)

    user_properties = [Condo(), Shop()]
    print(user_properties)
