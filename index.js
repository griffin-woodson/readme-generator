
// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];

// Prompts for user inputs
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the name of the project?",
            validate: title => {
                if (title) {
                    return true;
                }
                else {
                    console.log("Please enter a project title.");
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Provide a brief description of the project.",
            validate: description => {
                if (description) {
                    return true;
                }
                else {
                    console.log("Please provide a project description.");
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "Please provide installation instructions, if applicable.",
            default: "No installation is required to run this project. View the 'Deployment' section to find the link to the site."
        },
        {
            type: "input",
            name: "usage",
            message: "How should users interact with/use this program?",
            validate: usage => {
                if (usage) {
                    return true;
                }
                else {
                    console.log("Please provide some usage instructions for this program.");
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license was this created under?",
            choices: ["MIT", "GPL", "None"],
            validate: license => {
                if (license) {
                    return true;
                }
                else {
                    console.log("Please select a license.");
                }
            }
        },
        {
            type: "input",
            name: "tests",
            message: "Enter any applicable test information.",
            default: "No testing frameworks were used in the development of this project, and it does not contain test files."
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
            validate: github => {
                if (github) {
                    return true;
                }
                else {
                    console.log("Please provide a GitHub username.");
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address.",
            validate: email => {
                if (email) {
                    return true;
                }
                else {
                    console.log("Please provide a valid email address.");
                }
            }
        },
        {
            type: "input",
            name: "screenshot",
            message: "Provide the relative filepath to the screenshot file for this project.",
            default: "/"
        },
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(answer => {
        console.log(answer);
        return generateMarkdown(answer)
    })
    .then(file => {
        fs.writeFile("./dist/README.md", file, err => {
            if (err) {
                console.log(err);
            }
            else {
                console.log("Markdown created! View the README in the dist folder");
            }
        })
    });
}

// Function call to initialize app
init();