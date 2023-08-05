class Singleton:
    __instance = None

    def __init__(self):
        """ Virtually private constructor. """
        if Singleton.__instance is not None:
            raise Exception("This class is a singleton!")
        else:
            self.counter = 0
            Singleton.__instance = self

    @staticmethod
    def get_instance():
        if Singleton.__instance is None:
            Singleton()
        return Singleton.__instance

    def increment(self):
        self.counter += 1

    def decrement(self):
        self.counter -= 1

    def get_value(self):
        return self.counter


if __name__ == "__main__":
    s = Singleton.get_instance()
    print(s, s.get_value())

    s.increment()
    s.increment()
    s.increment()
    print(s, s.get_value())

    s = Singleton.get_instance()
    print(s, s.get_value())
