const Employee = require('./employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super(id, name, email);
        this.github = github;
    }
    github()

    getRole() {
        return "Engineer"
    }
}

module.exports = Engineer;