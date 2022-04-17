const { expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
    const engineer = new Engineer('Dave', 1, 'fake.email@gmail.com', 'engineer.github');

    expect(engineer.name).toMatch(/[a-z]/i);
    expect(engineer.id).toBeGreaterThan(0);
    expect(engineer.email).toMatch(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    expect(engineer.github).toMatch(/[a-z]/i);
});

test("get engineer's name from the getName()", () => {
    const engineer = new Engineer('Dave', 1, 'fake.email@gmail.com', 'engineer.github');
  
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test("get engineer's id from the getId()", () => {
    const engineer = new Engineer('Dave', 1, 'fake.email@gmail.com', 'engineer.github');
  
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test("get engineer's github from the getGithub()", () => {
    const engineer = new Engineer('Dave', 1, 'fake.email@gmail.com', 'engineer.github');
  
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});

test("get engineer's email from the getEmail()", () => {
    const engineer = new Engineer('Dave', 1, 'fake.email@gmail.com', 'engineer.github');
  
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("get 'Engineer' from the getRole()", () => {
    const engineer = new Engineer('Dave', 1, 'fake.email@gmail.com', 'engineer.github');
  
    expect(engineer.getRole()).toEqual('Engineer');
});