function generateMarkdown(data) {
  const licenseBadge = data.license
  const licenseNotice = data.license

  const markdownContent = `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  → [Installation](#installation)
  → [Usage](#usage)
  → [Contributing](#contributing)
  → [Tests](#tests)
  → [License](#license)
  → [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## License
  ${licenseBadge}
  ${licenseNotice}

  ## Questions
  If you have any questions about this project, you can reach out to me via GitHub or email:
  → GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  → Email: ${data.emailAddress}
  `;

  return markdownContent;
}

module.exports = generateMarkdown;
