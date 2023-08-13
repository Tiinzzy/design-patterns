class Person:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def show(self):
        print(self.__name, self.__age)

    # This is default black and white print method
    def print(self):
        pass

    def name(self):
        return self.__name

    def age(self):
        return self.__age


class DecoratedPerson(Person):

    def show(self):
        print(f'Name:{self.name()}, Age:{self.age()}')

    # Here we print colored
    def print(self):
        pass


if __name__ == "__main__":
    p = Person('Alice', 23)
    p.show()

    dp = DecoratedPerson('Bob', 18)
    dp.show()
