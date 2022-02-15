const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        super(id, name, email);
        this.officeNumber = officeNumber;

        if (name === undefined || name === "") {
            let errorMsg = new Error('Not all parameters were provided')
            throw errorMsg;
        }
    }
    //getofficeNumber()


    getRole() {
        return "Manager"
    }
}

module.exports = Manager;