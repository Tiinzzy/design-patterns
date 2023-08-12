import time
from threading import Thread


class Worker:

    def __init__(self, name):
        self.__name = name
        self.__busy = False

    def execute(self, task, delay):
        self.__busy = True
        t = time.localtime()
        current_time = time.strftime("%H:%M:%S", t)
        print(f'\n\n{current_time}: {self.__name}: Executing {task} (delay={delay})')
        time.sleep(delay)
        self.__busy = False

    def is_busy(self):
        return self.__busy

    def get_name(self):
        return self.__name


class WorkerPool:
    def __init__(self):
        self.__pool = []

    def add(self, name):
        self.__pool.append(Worker(name))

    def size(self):
        return len(self.__pool)

    def run_tasks(self, tasks):
        tasks_to_be_executed = {}
        for t in tasks:
            tasks_to_be_executed[t] = False

        while len(tasks_to_be_executed) > 0:
            to_be_deleted = []
            for t in tasks_to_be_executed:
                for w in self.__pool:
                    if not w.is_busy():
                        thread = Thread(target=w.execute, args=(t, t))
                        thread.start()
                        to_be_deleted.append(t)
                        break
                break
            for t in to_be_deleted:
                del tasks_to_be_executed[t]


if __name__ == "__main__":
    wp = WorkerPool()
    wp.add('kamran')
    wp.add('tina')
    wp.add('kiana')
    wp.add('avian')
    wp.add('alice')
    wp.add('bob')

    all_tasks = [1, 3, 10, 2, 6, 7, 4, 5, 8, 9]
    wp.run_tasks(all_tasks)
    print(f'total to be processed time: {sum(all_tasks)}')
