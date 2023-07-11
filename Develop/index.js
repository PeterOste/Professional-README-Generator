// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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

const generateReadme = ({ title, description, installation, usage, contributing, test, license, githubUsername, emailAddress }) => {

    const readmeContent =`
    # ${title}

    ## Description
    ${description}

    ## Table of Contents
    -----
    → [Installation](#installation)
    → [Usage](#usage)
    → [Contributing](#contributing)
    → [Test](#test)
    → [License](#license)
    → [Questions](#questions)

    ## Installation
    ${installation}

    ## Usage
    ${usage}

    ## Contributing
    ${contributing}

    ## Test
    ${test}

    ## License
    ${license}

    ## Questions
    If you have any questions about this project, you can contact me via GitHub or email: 
    → GitHub: https://github.com/${githubUsername}
    → Email: ${emailAddress}
    `;
    
    return readmeContent;
};

function init() {
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

    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadme(answers);
        writeToFile('README.md', readmeContent);
    });
}

init();