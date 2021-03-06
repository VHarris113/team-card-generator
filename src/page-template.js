const path = require("path");
const fs = require("fs");

const render = (employees) => {
    let team = "";

    employees.forEach((employee) => {
        switch (employee.getRole()) {
            case "Manager":
            team += `
                <div class="card text-white mb-3" style="max-width: 18rem;">
                <div class="card-header">
                  <h4>${employee.getName()}</h4>
                  <h4>${employee.getRole()}</h4>
                </div>
                <div class="card-body">
                  <p>
                    <div class="card">
                      <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: ${employee.getEmail()}</li>
                        <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
                      </ul>
                    </div>
                  </p>
                </div>
              </div>
              `;
        break;
            case "Engineer":
                team += `
                <div class="card text-white mb-3" style="max-width: 18rem;">
                <div class="card-header">
                  <h4>${employee.getName()}</h4>
                  <h4>${employee.getRole()}</h4>
                </div>
                <div class="card-body">
                  <p>
                    <div class="card">
                      <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: ${employee.getEmail()}</li>
                        <li class="list-group-item">GitHub: ${employee.getGitHub()}</li>
                      </ul>
                    </div>
                  </p>
                </div>
              </div>
              `;
        break;
            case "Intern":
                team += `
                <div class="card text-white mb-3" style="max-width: 18rem;">
                <div class="card-header">
                  <h4>${employee.getName()}</h4>
                  <h4>${employee.getRole()}</h4>
                </div>
                <div class="card-body">
                  <p>
                    <div class="card">
                      <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.getId()}</li>
                        <li class="list-group-item">Email: ${employee.getEmail()}</li>
                        <li class="list-group-item">${employee.getSchool()}</li>
                      </ul>
                    </div>
                  </p>
                </div>
              </div>
              `;
        break;
        default:
            return "Well, that's not good. It broke.";
        }});
        
    const htmlPage = `
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
        <link rel="stylesheet" href="../assets/style.css">
    </head>
    <header>My Team</header>
    <body>
        <main class="row">
          ${team}
        </main>
    </body>
    </html>
    `;
    return htmlPage;
};

module.exports = render;