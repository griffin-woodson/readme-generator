// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return "";
    }
    else {
        return `[<img src="https://img.shields.io/badge/License-${license}-blue.svg?logo=LOGO">](LINK)`
    }
};

function listTechnologies(string) {
    let splitString = string.split(", ");
    let bullets = splitString.map((item) => "* "+item+"\n");
    return bullets;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ## Description
  ${data.description}

  ## Table of Contents
  1. [Installation](#Installation)
  2. [Usage](#Usage)
  3. [License](#License)
  4. [Tests](#Tests)
  5. [Questions](#Questions)
  6. [Screenshot](#Screenshot)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}

  ## Tests
  ${data.tests}

  ## Questions
  [Check out my GitHub](https://github.com/${data.github})
  --or--
  Email me at ${data.email}

  ## Screenshot
  ![Screenshot](${data.screenshot})
`;
}

module.exports = generateMarkdown;