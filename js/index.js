// TODO: Include packages needed for this application
// linking required applications
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
// creating questions for user to answer
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
        message:'Input your test data here'
     },

    {
        type:'list',
        name:'license',
        message:'Please choose a license from the following list',
        choices:[
        "None",
        "Apache_2.0",
        "GNU_GPLv3",
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

// TODO: Create a function to initialize app
// creating a function to generate readme and answers to questions as well as an error 
function init() {
    inquirer.prompt(questions).then(function(answers) {
        fs.writeFile('README.md', generateMarkdown({...answers}), function(err) {
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
