const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;

        if (name === undefined || name === "") {
            let errorMsg = new Error('Not all parameters were provided')
            throw errorMsg;
        }
    }
    //getSchool()
    
    getRole() {
        return "Intern"
    }
}

module.exports = Intern;