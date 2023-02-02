// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
        {
            type: "input",
            name: "username",
            message: "What is your Github Username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "project",
            message: "What is your project's name?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project"
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: "input",
            name: "dependancies",
            message: "What command should be run to install dependancies?"
        },
        {
            type: "input",
            name: "tests",
            message: "What command should be run to run tests?"
        },
        {
            type: "input",
            name: "repo",
            message: "What does the user need to know about using the repo?" 
        },
        {
            type: "input",
            name: "contributors",
            message: "Who are the contributors to this repo?"
        }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readme = generateMarkdown(data);

    fs.writeFile(fileName, readme, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log("Success!");
      })
    };
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("README.md", data);
    });
}

// Function call to initialize app
init();
