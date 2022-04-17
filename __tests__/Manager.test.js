const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Dave', 1, 'fake.email@gmail.com', 10);

    expect(manager.name).toMatch(/[a-z]/i);
    expect(manager.id).toBeGreaterThan(0);
    expect(manager.email).toMatch(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    expect(manager.officeNumb).toBeGreaterThan(0);
});

test("get manager's name from the getName()", () => {
    const manager = new Manager('Dave', 1, 'fake.email@gmail.com', 10);

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));

});

test("get manager's id from the getId()", () => {
    const manager = new Manager('Dave', 1, 'fake.email@gmail.com', 10);

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});

test("get manager's email from the getEmail()", () => {
    const manager = new Manager('Dave', 1, 'fake.email@gmail.com', 10);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("get 'manager' from the getRole()", () => {
    const manager = new Manager('Dave', 1, 'fake.email@gmail.com', 10);

    expect(manager.getRole()).toEqual("Manager");

});
