const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;

        if (name === undefined || name === "") {
            let errorMsg = new Error('Not all parameters were provided')
            throw errorMsg;
        }
    }
    //github()

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;