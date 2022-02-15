class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email
    }

    getName() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "name",
                    message: "Enter employee name"
                }
            ])
            .then(val => {
                console.log(val)
                name = data.name
            });
    }

    // getId()

    // getEmail()

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;