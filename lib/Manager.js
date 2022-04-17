const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumb) {
        super(name, id, email);
        this.officeNumb = officeNumb;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;