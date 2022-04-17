const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Dave', 1, 'fake.email@gmail.com');

    expect(employee.name).toMatch(/[a-z]/i);
    expect(employee.id).toBeGreaterThan(0);
    expect(employee.email).toMatch(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
});

test("get employee's name from the getName()", () => {
    const employee = new Employee('Dave', 1, 'fake.email@gmail.com');
  
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("get employee's id from the getId()", () => {
    const employee = new Employee('Dave', 1, 'fake.email@gmail.com');
  
    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("get employee's email from the getEmail()", () => {
    const employee = new Employee('Dave', 1, 'fake.email@gmail.com');
  
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("get 'Employee' from the getRole()", () => {
    const employee = new Employee('Dave', 1, 'fake.email@gmail.com');
  
    expect(employee.getRole()).toEqual('Employee');
});