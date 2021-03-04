//Included packages needed for this application
const inquirer = require(`inquirer`)
const fs = require(`fs`)
const util = require('util')

// make our markdown function available on this page so it requires everything set in my index.js and plays nicely with its other const friends
const generateMarkdown = require(`./utils/generateMarkdown`)

// create writeFile function using promises instead of a callback function(util.promisfy)
// writeFile instead of write so it keeps trying until all of data is written or an error occurs
const writeFileAsync = util.promisify(fs.writeFile)


const promptUser = () => {
    return 
    inquirer.prompt([
      {
        type: 'input',
        name: 'description',
        message: 'please enter a description of your project',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What is the usuage of this project?',
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
  }

  
// Created a function to initialize app using async await
async function init() {

  // once promptUser finishes running, that data is sent to const userInput
  const userInput = await promptUser();

  // now that we have our data we can use it as a parameter in our gmd function
  const generateReadMe = generateMarkdown(userInput)

  // here we will write the readme to the specified spot in our file structure
  await writeFileAsync(`where am i going? am i creating a file or do i make a folder first then assign this writefile to that folder?`, generateReadMe)
}

// Function call to initialize app
init();
