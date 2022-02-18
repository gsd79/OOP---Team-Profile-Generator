const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

function generateCard(member) {
   

    if (member.getRole() === 'Intern') {
        return `
        <div class="employee-card">
                <div class="card-top-bar">
                    <div class="employee-name">${member.name}</div>
                    <div class="employee-role">${member.getRole()}</div>
                </div>
                <div class="card-body-entry">
                <b>id:</b>${member.id}
                </div>
                <div class="card-body-entry">
                <b>email:</b> <a href="mailto: ${member.email}">${member.email}</a>  
                </div>
                <div class="card-body-entry">
                <b>school:</b> ${member.school}
                </div>
            </div>
        `;
    }
    else if (member.getRole() === 'Manager') {
        return `
        <div class="employee-card">
                <div class="card-top-bar">
                <div class="employee-name">${member.name}</div>
                <div class="employee-role">${member.getRole()}</div>
                </div>
                <div class="card-body-entry">
                <b>id:</b>${member.id}
                </div>
                <div class="card-body-entry">
                <b>email:</b> <a href="mailto:${member.email}">${member.email}</a>  
                </div>
                <div class="card-body-entry">
                <b>office number:</b> ${member.officeNumber}
                </div>
            </div>
        `
    }
    else (member.getRole() === 'Engineer')
    return `
            <div class="employee-card">
            <div class="card-top-bar">
            <div class="employee-name">${member.name}</div>
            <div class="employee-role">${member.getRole()}</div>
            </div>
            <div class="card-body-entry">
            <b>id:</b>${member.id}
            </div>
            <div class="card-body-entry">
            <b>email:</b> <a href="mailto:${member.email}">${member.email}</a> 
            </div>
            <div class="card-body-entry">
            <b>github:</b> <a href="https://github.com/${member.github}" target="_blank">${member.github}</a>
            </div>
            </div>

        `

};

// interate through responses and create cards

function generateSite(members) {
    var cards ='';

    for (var i = 0; i < members.length; i++) {
        var card = generateCard(members[i])

        cards = cards.concat(card);
    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Our Team</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <div class="top-bar">Meet Our Team</div>
        </header>
        <main>
            <div class="card-container">
             ${cards}
            </div>
        </main>
    </body>
    </html>
    `;
}

module.exports = generateSite;
