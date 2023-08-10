class DatabaseConnection {
    constructor() {

    }

    static runQuery() {
        return '';
    }
}

// ----------------------------------------------------------------------
class UserInterface {
    constructor() {

    }

    static getInputData() {
        return '';
    }

    static show_result(result) {
        console.log(result);
    }
}

// ----------------------------------------------------------------------
class Business{
    constructor() {

    }

    static doProcess(){
        let ui = new UserInterface();
        let db = new DatabaseConnection();
        let data = UserInterface.getInputData();
        let result = DatabaseConnection.runQuery(data);
        UserInterface.show_result(result);
    }
}


// ----------------------------------------------------------------------
const business = new Business()
Business.doProcess()

