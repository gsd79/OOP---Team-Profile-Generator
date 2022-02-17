  function generateCard() {

    if (this.role=== 'Intern')  {
        return `
        <div class="employee-card">
                <div class="card-top-bar">
                    <div class="employee-name">${this.name}</div>
                    <div class="employee-role">${this.role}</div>
                </div>
                <div class="card-body-entry">
                id:${this.id}
                </div>
                <div class="card-body-entry">
                    email: <a href="mailto: ${this.email}">${this.email}</a>  
                </div>
                <div class="card-body-entry">
                    school: ${this.school}
                </div>
            </div>
        `;
    }
    else if(this.role === 'Manager') {
        return `
        <div class="employee-card">
                <div class="card-top-bar">
                <div class="employee-name">${this.name}</div>
                <div class="employee-role">${this.role}</div>
                </div>
                <div class="card-body-entry">
                id:${this.id}
                </div>
                <div class="card-body-entry">
                email: <a href="mailto:${this.email}">${this.email}</a>  
                </div>
                <div class="card-body-entry">
                    office number: ${this.officeNumber}
                </div>
            </div>
        `
    }
    else (this.role === 'Engineer') 
        return `
            <div class="employee-card">
            <div class="card-top-bar">
            <div class="employee-name">${this.name}</div>
            <div class="employee-role">${this.role}</div>
            </div>
            <div class="card-body-entry">
            id:${this.id}
            </div>
            <div class="card-body-entry">
            email: <a href="mailto:${email}">${email}</a> 
            </div>
            <div class="card-body-entry">
                github: <a href="github.com/${github}" target="_blank">${github}</a>
            </div>
            </div>

        `
    };

module.exports = generateSite => {
    return`
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
         ${generateCard()}
        </div>
    </main>
</body>
</html>
    `
}