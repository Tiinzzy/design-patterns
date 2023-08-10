import time
import random
from threading import Thread


class Worker:

    def __init__(self, name):
        self.__name = name
        self.__busy = False

    def execute(self, task):
        self.__busy = True
        t = time.localtime()
        current_time = time.strftime("%H:%M:%S", t)
        delay = random.randint(1, 5)
        print(f'{current_time}: {self.__name}: Executing {task} (delay={delay})')
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

        while True:
            to_be_deleted = []
            for t in tasks_to_be_executed:
                for w in self.__pool:
                    if not w.is_busy():
                        thread = Thread(target=w.execute, args=(t,))
                        thread.start()
                        to_be_deleted.append(t)
                        break
                break
            for t in to_be_deleted:
                del tasks_to_be_executed[t]

            if len(tasks_to_be_executed) == 0:
                break


if __name__ == "__main__":
    wp = WorkerPool()
    wp.add('kamran')
    wp.add('tina')
    wp.add('kiana')
    wp.add('avian')

    all_tasks = [12, 332, 35, 65, 7, 73, 1, 6, 7, 8, 3, 6, 8]
    wp.run_tasks(all_tasks)
