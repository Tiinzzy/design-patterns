const mysql = require('mysql2');

class DatabaseConnection {
    static #myConnector;

    constructor() {
        DatabaseConnection.#myConnector = mysql.createConnection({
            host: "localhost",
            user: "yourusername",
            password: "yourpassword"
        })
    }

    runSelectQuery(query) {
        DatabaseConnection.#myConnector.connect(function (err) {
            if (err) throw err;
            DatabaseConnection.#myConnector.query("SELECT * FROM customers", function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                return result;
            });
        });
    }
}

const db = new DatabaseConnection()
db.runSelectQuery("SELECT * FROM customers")