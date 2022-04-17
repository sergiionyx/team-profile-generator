const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {
        super(name);
        this.officeNumb = 1;
    }
}

module.exports = Manager;