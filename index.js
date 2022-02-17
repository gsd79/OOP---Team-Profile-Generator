//modules
const inquirer = require('inquirer');
const fs = require('fs');

//employee classes and templates
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateSite = require('./src/page-template');


const managerQuestions = () => {
  return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please enter manager\'s name (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Manager name is required to continue!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "Please enter manager's email address (Required)",
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Email address is required to continue!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Please manager employee id (Required)',
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log('Employee id is required!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'office number',
        message: 'What is the office number of the manager? (Required)',
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log('Manager office number is required!');
            return false;
          }
        }
      }
    ]);

  }
  const addNewEmployee = (employeeData) => {
      console.log(`
  =================
  Add New Employee
  =================
  `);

  if (!employeeData.employee) {
    employeeData.employee = [];
  }
    return inquirer.prompt([
      {
        type: 'input',
        name: 'addNew',
        message: 'Would you like to add another employee?',
        default: false
      },
      
      {
          type: 'list',
          name: 'role',
          message: 'Please choose an employee role to add (Required)',
          choices: ['Engineer', 'Intern'],
          when: (answers) => answers.addNew === true,
          validate: roleInput => {
            if (roleInput) {
              return true;
            } else {
              console.log('Please choose an employee role!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'school',
          message: 'What school does the intern attend? (Required)',
          when: (answers) => answers.role === 'Intern',
          validate: schoolInput => {
            if (schoolInput) {
              return true;
            } else {
              console.log('Intern school is required!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'office number',
          message: 'What is the office number of the manager? (Required)',
          when: (answers) => answers.role === 'Manager',
          validate: schoolInput => {
            if (schoolInput) {
              return true;
            } else {
              console.log('Manager office number is required!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'github',
          message: 'Please enter the GitHub username for the engineer (Required)',
          when: (answers) => answers.role === 'Engineer',
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Github username is required!');
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'addNewEmployee',
          message: 'Would you like to add another employee?',
          default: false
        },
    ])
    
    .then(employeeData => {
      employeeData.employee.push(employeeData);
      if(employeeData.addNewEmployee){
        return addNewEmployee(employeeData);
      } else {
        return employeeData;
      }
    });
  } 

  managerQuestions()
    .then(addNewEmployee)

    

  // Function to write HTML file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateSite(data), err => {
      if (err) {
      console.error(err)
      return
      }
  })
}
// Function to copy style sheet
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'Stylesheet created!'
      });
    });
  });
};

// Function to initialize app

function init() {
  inquirer.prompt(addNewEmployee).then((data) => {
      writeToFile('./dist/example.html', data);
      copyFile('./src/style.css', './dist/style.css')
  });
}

// Function call to initialize app
init();