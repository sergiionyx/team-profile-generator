class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = 1;
        this.email = "fake.email@gmail.com";
    }
}

module.exports = Employee;