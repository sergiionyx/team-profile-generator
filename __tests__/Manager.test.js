const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('Dave');

    expect(manager.name).toBe('Dave');
});
