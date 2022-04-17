const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const intern = new Intern('Dave');

    expect(intern.name).toBe('Dave');
});