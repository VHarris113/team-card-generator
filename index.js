const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const Manager = require("./lib/Manager");
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const pageTemplate = require('./src/page-template');

membersArray = [];

function createManager() {
  inquirer.prompt([
      {
          type: 'input',
          name: 'managerName',
          message: "What is your team manager's name?",
      },
      {
          type: 'input',
          name: 'managerId',
          message: "What is your team manager's id?",
      },
      {
          type: 'input',
          name: 'managerEmail',
          message: "What is your team manager's email?",
      },
      {
          type: 'input',
          name: 'managerOfficeNum',
          message: "What is your team manager's office number?",
      },
  ]).then(answers => {
      console.log(answers);
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.OfficeNum);
      console.log(manager);
    })
    console.log(membersArray);
  
  }

// function runApp() {
//   inquirer
//   .prompt([
//       {
//           type: 'input',
//           name: 'name',
//           message: 'What is your team-member name?'
//       },
//       {
//           type: 'checkbox',
//           name: 'title',
//           message: 'What is their position?',
//           choices: ['Manager', 'Engineer', 'Intern']
//       },
//       {
//           type: 'input',
//           name: 'id',
//           message: 'What is their identification number?',
//       },
//       {
//           type: 'input',
//           name: 'email',
//           message: 'What is their email address?',
//       },
//       {
//           type: 'input',
//           name: 'office',
//           message: 'What is their office number?',
//       },
//       {
//         type: 'checkbox',
//         name: 'add',
//         message: 'Is there anyone employee you want to add?',
//         choices: ['Yes', 'No']
//       }
//   ])
//   .then((answers) => {
//     const teamContent = buildTeam(answers);
//     fs.writeToFile('index.html', teamContent, err =>
//     err ? console.log(err) : console.log("Congratulations! Your team cards are now available!")
// )}); }

    //   function buildTeam() {
    //     if (!fs.existsSync(OUTPUT_DIR)) {
    //       fs.mkdirSync(OUTPUT_DIR)
    //     }
    //     fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    //   }
    // runApp();