const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const pageTemplate = require('./src/page-template');

function runApp() {
  inquirer
  .prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is your team-member name?'
      },
      {
          type: 'checkbox',
          name: 'title',
          message: 'What is their position?',
          choices: ['Manager', 'Engineer', 'Intern', 'None']
      },
      {
          type: 'input',
          name: 'id',
          message: 'What is their identification number?',
      },
      {
          type: 'input',
          name: 'email',
          message: 'What is their email address?',
      },
      {
          type: 'input',
          name: 'office',
          message: 'What is their office number?',
      },
      {
        type: 'checkbox',
        name: 'add',
        message: 'Is there anyone employee you want to add?',
        choices: ['Yes', 'No']
      }
  ])
  .then((answers) => {
    const teamCardsContent = generateTeamCards(answers);
    fs.writeToFile('index.html', teamCardsContent, err =>
    err ? console.log(err) : console.log("Congratulations! Your team cards are now available!")
)});
}

      function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
      }
    runApp();
    

//     In index.js: 
// const path = require("path");
// const fs = require("fs");
// const OUTPUT_DIR = path.resolve(__dirname, "dist")
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// function runApp() {
//   ...Inquirer prompt and the functions that will ask users about manager, intern, and engineer.
//   function buildTeam() {
//     // Create the output directory if the output path doesn't exist
//     if (!fs.existsSync(OUTPUT_DIR)) {
//       fs.mkdirSync(OUTPUT_DIR)
//     }
//     fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
//   }
// }
// runApp();