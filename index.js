// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// description, installation instructions, usage information, contribution guidelines, and test instructions
// const questions = [];
inquirer
const questions = [
    {
        type:'input',
        name: 'title',
        message: 'What is your project title?'
    },

    {
        type:'input',
         name:'description' ,
         message:'Provide a short description explaining the what, why, and how of your project:'
    },

    {
        type:'input',
        name:'installation',
        message:'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },

    {
        type:'input',
        name:'usage',
         message:'Provide instructions and examples for use. Include screenshots as needed.'   
    },

    {
        type:'input',
        name:'credits',
        message:'Please name any collaborators, third party assets, or any tutorials that you followed, with links to the related'
    },

    {
        type:'input',
        name:'test',
        message:'Imput your test data here'
     },

    {
        type:'list',
        name:'license',
        message:'Please choose a license from the following list',
        choices:[
        "None",
        "Apache 2.0",
        "GPL 3.0",
        "BSD 3",
        "MIT",
     ]
    },

    {
        type:'input',
        name:'github',
        message:'Please enter your Github Username'
    },
    {
        type:'input',
        name:'email',
        message:'Please enter your email address'
    }

];
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
function readMe(response) {
    return `
    # #${response.title}

    ## Table of Contents
        -Description
        -Installation
        -Usage
        -Credits
        -Test
        -License

    ## Description:
        ${response.description}
    ## Installation
        ${response.installation}
    ## Usage
        ${response.usage}
    ## Credits
        ${response.credits}
    ## Test
        ${response.test}
    ## License
        ${response.license}
    ## Have a Question? 

        Please reach out via email to my email address: ${response.email}

        Please also visit my Github Repo at github.com/${response.github}`;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response) {
        const generateReadme = readMe(response)
        fs.writeFile('README.md', generateReadme, function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('README has been generated!')
            }
        })
    }
)}
// Function call to initialize app
init();
