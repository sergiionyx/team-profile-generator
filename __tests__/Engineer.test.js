const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.name).toMatch(/[a-z]/i);
    expect(engineer.id).toBeGreaterThan(0);
    expect(engineer.email).toMatch(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    expect(engineer.github).toMatch(/[a-z]/i);
});