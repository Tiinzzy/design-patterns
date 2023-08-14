class Shop:
    def __init__(self, name):
        self.__name = name
        self.__product = None

    def order(self, product):
        self.__product = product

    def to_str(self):
        return f'name:{self.__name} , product:{self.__product}'


class Delivery:

    @staticmethod
    def collect(merchandises):
        for m in merchandises:
            print(m.to_str())


class Mediator:
    @staticmethod
    def shop_collect(merchandises):
        shops = []
        for m in merchandises:
            s = Shop(m['shop'])
            s.order(m['product'])
            shops.append(s)
        Delivery.collect(shops)


if __name__ == "__main__":
    zara = Shop('Zarah')
    zara.order('that green cool dress')

    brown = Shop('Brown')
    brown.order('cutey shoes')

    Delivery.collect((zara, brown))

    print('- ' * 40)

    Mediator.shop_collect(({'shop': 'Zarah', 'product': 'that green cool dress'},
                           {'shop': 'Brown', 'product': 'cutey shoes'}))
