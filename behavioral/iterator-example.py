NOT_DONE = 'not-yet-done'
DONE = 'completed'


class Task:
    def __init__(self, title):
        self.__title = title
        self.__status = NOT_DONE

    def to_string(self):
        return f'{self.__title}, {self.__status}'

    def get(self):
        return self.__title

    def is_done(self):
        return self.__status == DONE

    def run(self):
        # do something and the set status to done
        self.__status = DONE

    def reset(self):
        self.__status = NOT_DONE


class Tasks:

    def __init__(self):
        self.__tasks = []
        self.__iterator_index = 0

    def get_tasks(self):
        return self.__tasks

    def add(self, title):
        self.__tasks.append(Task(title))

    def show(self):
        print('\n'.join([t.to_string() for t in self.__tasks]))

    def next_task(self):
        if self.__iterator_index < len(self.__tasks):
            self.__iterator_index += 1
            return self.__tasks[self.__iterator_index - 1]
        else:
            return None

    def reset(self):
        self.__iterator_index = 0
        for task in self.__tasks:
            task.reset()


def do_something_with_task(task):
    if not task.is_done():
        print('I am doing something difficult on this task => ', task.to_string())
        task.run()
        print('I am done with task => ', task.to_string())
        print()


if __name__ == "__main__":
    tasks = Tasks()

    tasks.add('face cleaning')
    tasks.add('take a bath')
    tasks.add('have breakfast')

    # this is just for check
    tasks.show()

    print('- ' * 30)

    # typical loop
    for t in tasks.get_tasks():
        do_something_with_task(t)

    print('- ' * 30)

    # iterator pattern
    tasks.reset()
    tt = tasks.next_task()
    while tt is not None:
        do_something_with_task(tt)
        tt = tasks.next_task()
