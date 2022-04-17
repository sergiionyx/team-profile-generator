const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Dave');

    expect(employee.name).toMatch(/[a-z]/i);
    expect(employee.id).toBeGreaterThan(0);
    expect(employee.email).toMatch(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
});