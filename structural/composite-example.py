class Principal:
    def __init__(self, name):
        self.__name = name

    def to_str(self):
        return self.__name


class ClassRoom:
    def __init__(self, name):
        self.__name = name

    def to_str(self):
        return self.__name


class School:
    def __init__(self, name, manager_name, class_count):
        self.__name = name
        self.__principal = Principal(manager_name)
        self.__class_rooms = []
        for i in range(class_count):
            self.__class_rooms.append(ClassRoom('class #' + str(i)))

    def to_str(self):
        school_as_str = f'name: {self.__name}, principal:{self.__principal.to_str()}'
        school_as_str += '\n'
        for c in self.__class_rooms:
            school_as_str += ' ' + c.to_str() + '\n'
        return school_as_str


if __name__ == "__main__":

    school = School('Thorn Hill School', 'Mr. bean', 5)
    print(school.to_str())
