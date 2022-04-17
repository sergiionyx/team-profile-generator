const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const intern = new Intern('Dave');

    expect(intern.name).toMatch(/[a-z]/i);
    expect(intern.id).toBeGreaterThan(0);
    expect(intern.email).toMatch(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    expect(intern.school).toMatch(/[a-z]/i);
});