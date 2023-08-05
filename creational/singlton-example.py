class Counter:
    __instance = None

    def __init__(self):
        """ Virtually private constructor. """
        if Counter.__instance is not None:
            raise Exception("This class is a singleton!")
        else:
            self.counter = 0
            Counter.__instance = self

    @staticmethod
    def get_instance():
        if Counter.__instance is None:
            Counter()
        return Counter.__instance

    def increment(self):
        self.counter += 1

    def decrement(self):
        self.counter -= 1

    def get_value(self):
        return self.counter


if __name__ == "__main__":
    s = Counter.get_instance()
    print(s, s.get_value())

    s.increment()
    s.increment()
    s.increment()
    print(s, s.get_value())

    s = Counter.get_instance()
    print(s, s.get_value())
