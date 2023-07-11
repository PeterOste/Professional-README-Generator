// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter the installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage instructions for your project:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter your contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter testing instructions:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Enter the license for your project:',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'emailAddress',
        message: 'Enter your email address:',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README created successfully!')
    });
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
