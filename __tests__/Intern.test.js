const { expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const intern = new Intern('Dave', 1, 'fake.email@gmail.com', 'intern school');

    expect(intern.name).toMatch(/[a-z]/i);
    expect(intern.id).toBeGreaterThan(0);
    expect(intern.email).toMatch(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    expect(intern.school).toMatch(/[a-z]/i);
});

test("get intern's name from the getName()", () => {
    const intern = new Intern('Dave', 1, 'fake.email@gmail.com', 'intern school');
  
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test("get intern's id from the getId()", () => {
    const intern = new Intern('Dave', 1, 'fake.email@gmail.com', 'intern school');
  
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});

test("get intern's school from the getSchool()", () => {
    const intern = new Intern('Dave', 1, 'fake.email@gmail.com', 'intern school');
  
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

test("get intern's email from the getEmail()", () => {
    const intern = new Intern('Dave', 1, 'fake.email@gmail.com', 'intern school');
  
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("get 'Intern' from the getRole()", () => {
    const intern = new Intern('Dave', 1, 'fake.email@gmail.com', 'intern school');
  
    expect(intern.getRole()).toEqual('Intern');
});