// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
  function renderLicenseBadge(license) {
    if (license !== 'None') {
      return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return`\n*[License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return  `\n ## License \n
   \n This project is licensed under the ${license} license. \n`
  }
  return "";
}
// TODO: Create a function to generate markdown for README
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

module.exports = generateMarkdown