const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const pageTemplate = require('./src/page-template');
const render = require("./lib/")


let employeeArr = [];

const roleQuestion = () => {
  inquirer.prompt([
    {
      type: 'list',
      message: 'What type of employee are you?',
      name: 'employeeRole',
      choices: ['Manager', 'Engineer', 'Intern'],
    }
  ])
  .then(answers => {
    if(answers.employeeRole === 'Manager') {
      managerQuestions();
    } else if
      (answers.employeeRole === 'Engineer') {
        engineerQuestions();
      } else if
      (answers.employeeRole === 'Intern') {
        internQuestions();
      }
  })
}

roleQuestion();

const managerQuestions = () => {
  inquirer.prompt([
      {
          type: 'input',
          name: 'managerName',
          message: "What is your manager's name?",
      },
      {
          type: 'input',
          name: 'managerId',
          message: "What is your manager's id?",
      },
      {
          type: 'input',
          name: 'managerEmail',
          message: "What is team manager's email?",
      },
      {
          type: 'input',
          name: 'managerOfficeNum',
          message: "What is your manager's office number?",
      },
      {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Do you need to add another employee?',
      },
  ]).then(answers => {
      console.log(answers);
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.OfficeNum);
      employeeArr.push(manager);

      console.log(employeeArr);

      if (answers.addEmployee) {
        roleQuestion();
      } else {
        let data = render(employeeArr);
        fs.writeFile(outputPath, data, (err) => {
          if (err) throw err;
          console.log("This entry has been saved!")
        })
      }
    })
  };

const engineerQuestions = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What's your engineer's email?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What's your engineer's id number?",
      },
      {
        type: 'input',
        name: 'github',
        message: "What's your engineer's GitHub account?",
      },
      {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Do you need to add another employee?',
      },
    ]).then(answers => {
      console.log(answers);
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
      employeeArr.push(engineer);

      console.log(employeeArr);

      if (answers.addEmployee) {
        roleQuestion();
      } else {
        let data = render(employeeArr);
        fs.writeFile(outputPath, data, (err) => {
          if (err) throw err;
          console.log("This entry has been saved!")
        })
      }
    })
  };

const internQuestions = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
      },
      {
        type: 'input',
        name: 'email',
        message: "What's your intern's email?"
      },
      {
        type: 'input',
        name: 'id',
        message: "What's your intern's id number?",
      },
      {
        type: 'input',
        name: 'university',
        message: "What school/university does your intern attend?",
      },
      {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Do you need to add another employee?',
      },
    ]).then(answers => {
      console.log(answers);
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.university);
      employeeArr.push(intern);

      console.log(employeeArr);

      if (answers.addEmployee) {
        roleQuestion();
      } else {
        let data = render(employeeArr);
        fs.writeFile(outputPath, data, (err) => {
          if (err) throw err;
          console.log("This entry has been saved!")
        })
      }
    })
};