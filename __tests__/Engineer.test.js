const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
    const engineer = new Engineer('Dave');

    expect(engineer.name).toBe('Dave');
});