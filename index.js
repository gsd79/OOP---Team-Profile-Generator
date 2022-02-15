//modules
const inquirer = require('inquirer');
const fs = require('fs');

//employee classes and templates
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateSite = require('./src/page-template');


const addEmployee = [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter employee name (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Employee name is required to continue!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter employee email address (Required)',
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter a valid email address!');
              return false;
            }
          }
      },
      {
          type: 'list',
          name: 'role',
          message: 'Please choose an employee role (Required)',
          choices: ['Engineer', 'Manager', 'Inter'],
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
          name: 'id',
          message: 'Please enter employee ID (Required)',
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log('Employee ID is required!');
                return false;
              }
            }
        },
        {
          type: 'confirm',
          name: 'add',
          message: 'Would you like to add another employee?',
          default: false
        },
    ]


   // Function to write HTML fileg
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
  inquirer.prompt(addEmployee).then((data) => {
      writeToFile('./dist/example.html', data);
      copyFile('./src/style.css', './dist/style.css')
  });
}

// Function call to initialize app
init();