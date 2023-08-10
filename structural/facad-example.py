class DatabaseConnection:
    def __init__(self):
        pass

    @staticmethod
    def run_query(query):
        return f'QUERY PROCESSED => {query}'


class UserInterface:

    def __init__(self):
        pass

    @staticmethod
    def get_input_data():
        return 'INPUT DATA'

    @staticmethod
    def show_result(result):
        print(result)


class Business:

    def __init__(self):
        pass

    @staticmethod
    def do_a_process():
        data = UserInterface.get_input_data()
        result = DatabaseConnection.run_query(data)
        UserInterface.show_result(result)


if __name__ == "__main__":
    Business.do_a_process()
