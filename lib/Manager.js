const Employee = require('../lib/Employee');

// manager class extends employee class
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager'
    }
};
 
  module.exports = Manager;