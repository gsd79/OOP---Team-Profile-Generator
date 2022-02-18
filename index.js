//modules
const inquirer = require("inquirer");
const fs = require("fs");

//employee classes and templates
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateSite = require("./src/page-template");

// array answer objects will be pushed into and used to create html
const members = [];

// first questions when app is intiliazed -- manager questions
const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter manager's name (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Manager name is required to continue!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter manager's email address (Required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Email address is required to continue!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please manager employee id (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Employee id is required!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the office number of the manager? (Required)",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Manager office number is required!");
            return false;
          }
        },
      },
    ])
    // responses populated into 'new Manager' object which is then pushed into 'members' array
    .then((response) => {
      members.push(
        new Manager(
          response.name,
          response.id,
          response.email,
          response.officeNumber
        )
      );
// function that will ask if a new employee is to be added
      addNewEmployee();
    });
};


// function to initalize Engineer questions when chosen from addNewEmployee()
const createEngineer = () => {
  return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter engineer's name (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Engineer name is required to continue!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter engineer's email address (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Email address is required to continue!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please engineer's employee id (Required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Employee id is required!");
          return false;
        }
      },
    },
    {
    type: "input",
    name: "github",
    message: "Please enter the GitHub username for the engineer (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Github username is required!");
        return false;
      }
    }
  }
])
// responses populated into 'new Engineer' object which is then pushed into 'members' array
  .then((response) => {
    members.push(
      new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      )
    );

    addNewEmployee();
  });
};

// function to initalize Engineer questions when chosen from addNewEmployee()
const createIntern = () => {
  return inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter intern's name (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Intern name is required to continue!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Please enter intern's email address (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Email address is required to continue!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "id",
      message: "Please intern's employee id (Required)",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("Employee id is required to continue!");
          return false;
        }
      },
    },
    {
    type: "input",
    name: "school",
    message: "Please enter the school associated with the intern. (Required)",
    validate: (schoolInput) => {
      if (schoolInput) {
        return true;
      } else {
        console.log("School name is required to continue!");
        return false;
      }
    }
  }
])
// responses populated into 'new Intern' object which is then pushed into 'members' array
  .then((response) => {
    members.push(
      new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      )
    );

    addNewEmployee();
  });
};


      const addNewEmployee = () => {
                  
          return inquirer
            .prompt([
              {
                type: "list",
                name: "role",
                message: "Would you like to add another employee? (Choose from bellow)",
                choices: ["Engineer", "Intern", "No"],
              },
            ])
            .then((response) => {
              switch (response.role) {
                case "Engineer":
                  createEngineer();
                  break;
                case "Intern":
                  createIntern();
                  break;
                case "No":
                  createTheTeam();
                }
            });
        };


// function to write responses to indicate path, using generateSite(members) and copy style.css from one path to the other along side generated HTML
function createTheTeam() {
  fs.writeFile("dist/team.html", generateSite(members), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
    if (err) {
      reject(err);
      return;
    }
    
  });
}


// Function call to initialize app
createManager();

