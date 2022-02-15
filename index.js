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
    const input = [{
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
        name: "officeNumber"
    }];
    return inquirer.prompt(input);
}

//Engineer Function to ask for name, id, email, github
function employeeEngineer() {
    const input = [{
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
    }];
    return inquirer.prompt(input);
}

//Intern Function to ask for name, id, email, school
function employeeIntern() {
    const input = [{
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
        name: "officeNumber"
    }];
    inquirer.prompt(input).then
    //store data
    choice()
}

//Function to trigger after manager info, asking to add engineers or interns
function choice() {
    const input = [{
        type: "list",
        message: "Add an enginner or intern or create team?",
        choices: ["Engineer", "intern", "create team"]
    }];
    inquirer.prompt(input).then

}

//Function for when intern or engineer is filled in it returns back to menu


//Function to run when I have decided to finish building my team


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
        .then(function (data) {
            console.log(data)
            let currentManager = new Manager(data.name, data.id, data.email, data.officeNumber)
            employees.push(currentManager);
            console.log(employees)
            choice()

        })
}

// Function call to initialize app
init();

// .then(function (data) {
//     const response = generateProfile(data, questions);
//     console.log(data);
//     writeToFile("index.html", response)
// })