const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = { Engineer };