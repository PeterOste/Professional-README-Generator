// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter a title for your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please enter the installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please enter usage instructions for your project:',
    },
    {
      type: 'input',
      name: 'license',
      message: 'Please enter the license for your project:',
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
