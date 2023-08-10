class Person:
    def __init__(self, name, age):
        self.__name = name
        self.__age = age

    def to_str(self):
        return f"name: {self.__name}, age:{self.__age}"

    def inc_age(self):
        self.__age += 1

    def clone(self):
        temp = Person(self.__name, self.__age)
        return temp


if __name__ == "__main__":
    p1 = Person('kamran', 55)
    p2 = p1.clone()
    print(p1.to_str())
    print(p2.to_str())

    p1.inc_age()
    print(p1.to_str())
    print(p2.to_str())
