// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// added the link to shields to create license badge
  function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// creating license link to display
function renderLicenseLink(license) {
  if (license !== 'None') {
    return`\n*[License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// creating text in the license section 
function renderLicenseLink(license) {
  if (license !== 'None') {
    return  `\n ## License \n
   \n This project is licensed under the ${license} license. \n`
  }
  return "";
}
// TODO: Create a function to generate markdown for README
// generating table of contents and other sections within readme
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)

  * [Installation](#installation)

  * [Usage](#usage)

  * [Credits](#credits)

  * [Test](#test)

  * [License](#license)

  *  [Questions](#questions)

## Description:
  ${data.description}
## Installation
  ${data.installation}
## Usage
  ${data.usage}
## Credits
  ${data.credits}
## Test
  ${data.test}

  ${renderLicenseLink(data.license)}

## Questions 

  Please reach out via email to my email address: ${data.email}

  Please also visit my Github Repo at github.com/${data.github}`;

}

// exporting generateMarkdown to be used in the index.js  file.
module.exports = generateMarkdown