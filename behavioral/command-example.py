import logging

logging.basicConfig(format='%(asctime)s %(levelname)-8s %(message)s', level=logging.INFO, datefmt='%Y-%m-%d %H:%M:%S')


class CmdKill:
    def __init__(self, name):
        self._name = name

    def run(self, *args):
        print(f'{self._name} is being killed at {args[0][0]}!')


class CmdBeat:
    def __init__(self, name):
        self._name = name

    def run(self, *args):
        print(f'{self._name} is being beaten at {args[0][0]}, {args[0][1]} times')


class Invoker0:
    def __init__(self, cmd, *args):
        self._cmd = cmd
        self._args = args

    def invoke(self):
        logging.warning(f'Invoking command {type(self._cmd).__name__} with parameters {self._args}')
        self._cmd.run(self._args)


class Invoker1:
    @staticmethod
    def invoke(cmd, *args):
        logging.warning(f'Invoking command {type(cmd).__name__} with parameters {args}')
        cmd.run(args)


class Invoker2:
    def __init__(self):
        self._cmd = None
        self._args = None

    def set(self, cmd, *args):
        self._cmd = cmd
        self._args = args

    def invoke(self):
        logging.warning(f'Invoking command {type(self._cmd).__name__} with parameters {self._args}')
        self._cmd.run(self._args)


if __name__ == "__main__":
    c = CmdKill('tina')
    c.run('10:13')

    print('- ' * 30)

    Invoker1.invoke(CmdBeat('kamran'), '10:10', 2)
    Invoker1.invoke(CmdKill('kamran'), '10:13')

    print('- ' * 30)

    i1 = Invoker2()
    i1.set(CmdBeat('kamran'), '10:10', 2)
    i1.invoke()

    i1.set(CmdKill('kamran'), '10:13')
    i1.invoke()

    print('- ' * 30)

    i1 = Invoker0(CmdBeat('kamran'), '10:10', 2)
    i1.invoke()

    i2 = Invoker0(CmdKill('kamran'), '10:13')
    i2.invoke()
