// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



const generateReadMe = ({title, description, motivation, why, problem, learned, installation, usage, credits}) =>
`
# ${title}

## Description

${description}
- ${motivation}
- ${why}
- ${problem}
- ${learned}



## Installation

${installation}

## Usage

${usage}



## Credits
${credits}
`
;

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your Project Title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the project. We will add to the description after this with why and additional "whats".',
      },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation?',
      },
      {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
      },
      {
        type: 'input',
        name: 'problem',
        message: 'What problem does it solve?',
      },
      {
        type: 'input',
        name: 'learned',
        message: 'What did you learn?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.',
      },
      {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. Or insert your own.',
      },
  ])
  .then((answers) => {
    const readMePageContent = generateReadMe(answers);

    fs.writeFile('userREADME.MD', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });




// TODO: Create a function to write README file
 //function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
