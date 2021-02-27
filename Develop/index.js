// TODO: Include packages needed for this application
const inquirer = require(`inquirer`)
const fs = require(`fs`)
const util = require('util')

// create writeFile function using promises instead of a callback function
// const writeFileAsync = util.promisify(fs.writeFile)


// const promptUser = () => {
//     return 
    inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'please enter a description of your project',
      },
      {
        type: 'input',
        name: 'table',
        message: 'table of contents placeholder, will return here',
        // take this out and create a table using markdown when you generate dynamically
      },
      {
        type: 'input',
        name: 'install',
        message: 'What is the installation process?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usuage of this project?',
      },
      {
        type: 'input',
        name: 'install',
        message: 'What is the installation process?',
      },
      {
        type: 'list',
        name: 'license',
        message:`What license will you be using for this project?`,
        choices: [
          "Apache",
          "MIT",
          "Mozilla",
          "GNU GPLv3"
        ]
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors if any?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'are there any tests included?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'what do I do if I need assistance?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter you email address here please.',
      },
    ]);
  // };





// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
