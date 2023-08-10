class DatabaseConnection {
    constructor() {

    }

    static runQuery(query) {
        return 'RUNNING THIS QUERY => ' + query;
    }
}

// ----------------------------------------------------------------------
class UserInterface {
    constructor() {

    }

    static getInputData() {
        return 'INPUT DATA';
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
        let data = UserInterface.getInputData();
        let result = DatabaseConnection.runQuery(data);
        UserInterface.show_result(result);
    }
}

// ----------------------------------------------------------------------
Business.doProcess()
