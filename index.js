const inquier = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateProfile.js');

//Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Project description:',
        name: 'description',
    },

]

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
    inquirer.prompt(questions)
        .then(function (data) {
            const response = generateProfile(data, questions);
            console.log(data);
            writeToFile("index.html", response)
        })
}

// Function call to initialize app
init();
