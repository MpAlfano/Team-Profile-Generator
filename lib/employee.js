class Employee {
    constructor(name, id, email) {
        this.id = id;
        this.name = name;
        this.email = email


        if (name === undefined || name === "") {
            let errorMsg = new Error('Not all parameters were provided')
            throw errorMsg;
        }
    }
    //getName()

    // getId()

    // getEmail()

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;