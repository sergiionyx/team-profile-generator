const { expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Dave');

    expect(manager.name).toMatch(/[a-z]/i);
    expect(manager.id).toBeGreaterThan(0);
    expect(manager.email).toMatch(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    expect(manager.officeNumb).toBeGreaterThan(0);
});
