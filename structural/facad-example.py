class DatabaseConnection:
    def __init__(self):
        pass

    @staticmethod
    def run_query():
        return ''


class UserInterface:

    def __init__(self):
        pass

    @staticmethod
    def get_input_data():
        return ''

    @staticmethod
    def show_result(result):
        print(result)


class Business:

    def __init__(self):
        pass

    @staticmethod
    def do_a_process(self):
        ui = UserInterface()
        db = DatabaseConnection()
        data = ui.get_input_data()
        result = db.run_query(data)
        ui.show_result(result)


if __name__ == "__main__":
    business = Business()
    business.do_a_process()
