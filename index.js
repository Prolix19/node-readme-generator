// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project title?",
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log("Please enter the title of your project before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project:",
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description of your project before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions for your project:",
        validate: installationInput => {
            if(installationInput) {
                return true;
            } else {
                console.log("Please enter installation instructions for your project before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information about your project:",
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log("Please enter usage information for your project before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines for your project:",
        validate: contributingInput => {
            if(contributingInput) {
                return true;
            } else {
                console.log("Please enter contribution guidelines for your project before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "tests",
        message: "Enter test instructions for your project:",
        validate: testsInput => {
            if(testsInput) {
                return true;
            } else {
                console.log("Please enter test instructions for your project before continuing.");
                return false;
            }
        }
    },
    {
        type: "checkbox",
        name: "license",
        message: "Select a license for your project:",
        choices: ["GPL3", "ISC", "MIT"],
        validate: licenseInput => {
            if(licenseInput.length <= 1) {
                return true;
            } else {
                console.log("Please choose at most one license for your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:",
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username before continuing.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter your GitHub username before continuing.");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./README.md", data, err => {
        if(err) {
            return err;
        } else {
            console.log("Your professional README has been generated! Please see the file README.md");
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
.then(projectData => {
    return generateMarkdown(projectData);
})
.then(markdownData => {
    writeToFile("README.md", markdownData);
});
