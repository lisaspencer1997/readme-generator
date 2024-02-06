import fs from 'fs';

import inquirer from 'inquirer';


// example prompt

inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter the title of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Entr installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information'
    },
    {
        type: 'list',
        name: 'licence',
        message: 'Choose your licence',
        choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    },
])
.then((answers) => {
    console.log(answers);

// generate the readme content

const readmeContent = 
    
`# ${answers.projectTitle} 

![Licence](https://img.shields.io/badge/license-${answers.licence}-brightgreen)
    
## Descripton
${answers.description}
    
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Licence](#licence)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}
    
## Usage
${answers.usage}
    
## Licence
This project is licenced under the ${answers.licence} licence. 
    
## Contributing
${answers.contributing}
    
## Tests
${answers.tests}

## Questions
Contact me on ${answers.email} if something is not working as intended. You can also find me at [my Github Profile](https://github.com/${answers.githubUsername}).

`;


// write the content to the readme.md

// fs.writeFileSync('SampleREADME.md', readmeContent);
fs.writeFileSync(`${answers.projectTitle.trim().replace(/\s+/g, '-')}-README.md`, readmeContent);

// console.log('README.md generated successfully!');
console.log(`${answers.projectTitle}-README.md generated successfully!`);

});