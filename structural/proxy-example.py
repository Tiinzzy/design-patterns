import mysql.connector


class DatabaseConnection:
    def __init__(self):
        self.__mydb = mysql.connector.connect(
            host="localhost",
            user="your_username",
            password="your_password"
        )

    def run_select_query(self, query):
        cursor = self.__mydb.cursor()
        cursor.execute(query)
        result = cursor.fetchall()
        return result


if __name__ == "__main__":
    db = DatabaseConnection()
    db.run_select_query("SELECT * FROM customers")
