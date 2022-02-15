const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')

const generateProfile = require('./utils/generateProfile.js');

var employees = [];

//Manager Function to ask for name, id, email and office number
function employeeManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        }, {
            type: "input",
            message: "What is your ID?",
            name: "id"
        }, {
            type: "input",
            message: "What is your email?",
            name: "email"
        }, {
            type: "input",
            message: "What is your office number?",
            name: "office"
        }
    ])
        .then(response => {
            console.log(response)
            let currentManager = new Manager(response.name, response.id, response.email, response.office)
            employees.push(currentManager);
            console.log(employees)
            choice()
        })
}

//Engineer Function to ask for name, id, email, github
function employeeEngineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        }, {
            type: "input",
            message: "What is your ID?",
            name: "id"
        }, {
            type: "input",
            message: "What is your email?",
            name: "email"
        }, {
            type: "input",
            message: "What is your github?",
            name: "github"
        }
    ])
        .then(response => {
            console.log(response)
            let currentEngineer = new Engineer(response.name, response.id, response.email, response.github)
            employees.push(currentEngineer);
            console.log(employees)
            choice()
        })
}

//Intern Function to ask for name, id, email, school
function employeeIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        }, {
            type: "input",
            message: "What is your ID?",
            name: "id"
        }, {
            type: "input",
            message: "What is your email?",
            name: "email"
        }, {
            type: "input",
            message: "What school did you attend?",
            name: "school"
        }
    ])
        .then(response => {
            console.log(response)
            let currentIntern = new Intern(response.name, response.id, response.email, response.school)
            employees.push(currentIntern);
            console.log(employees)
            choice()
        })
}

//Function to trigger after adding manager, engineer or intern info
//asking to add another employee or create team
function choice() {
    inquirer.prompt([
        {
            type: "list",
            message: "Add an enginner or intern or create team?",
            choices: ["engineer", "intern", "create team"],
            name: "selection"
        },
    ])
        .then(response => {
            console.log(response.selection)
            if (response.selection === "engineer") {
                employeeEngineer()
            } else if (response.selection === "intern") {
                employeeIntern()
            } else if (response.selection === "create team") {
                generateProfile()
            }
        })
};

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("success")
        }
    })
}

// Function to initialize app
function init() {
    employeeManager()

}

// Function call to initialize app
init();


//Function to run when I have decided to finish building my team

// .then(function (data) {
//     const response = generateProfile(data, questions);
//     console.log(data);
//     writeToFile("index.html", response)
// })