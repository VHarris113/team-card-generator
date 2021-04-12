const markdown = require('../assets/utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html");

function runApp() {
const generateTeamCards = (answers) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Development Team Cards</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Xanh+Mono:ital@1&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/style.css">
</head>
<header>My Team</header>
<body>
    <main class="row">
      <div class="card text-white mb-3" style="max-width: 18rem;">
        <div class="card-header">
          <h4>${answers.name}</h4>
          <h4>${markdown.titleBadge(answers.title)}</h4>
        </div>
        <div class="card-body">
          <p>
            <div class="card">
              <ul class="list-group">
                <li class="list-group-item">ID: ${answers.id}</li>
                <li class="list-group-item">Email: ${answers.email}</li>
                <li class="list-group-item">Office Number: ${answers.office}</li>
              </ul>
            </div>
          </p>
        </div>
      </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
<script src="assets/js/index.js"></script>
</body>
</html>`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team-members name?'
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

      function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
      }
    }
    runApp();
    