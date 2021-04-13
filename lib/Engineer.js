const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.getGitHub = this.getGitHub;
    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.getGitHub;
    }
}

module.exports = Engineer;