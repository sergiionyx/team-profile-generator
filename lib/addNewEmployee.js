// INQUIRER NEED TO INTERACT WITH USER
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const generateMarkdown = require('../src/generateMarkdown');

// CONSTRUCTOR TO GET USER INPUT
class addNewEmployee {
    constructor() {
        this.manager;
        this.engineers = [];
        this.interns = [];
    }
    // PROMPT FOR MANAGER
    promptUser() {
        inquirer
            .prompt([
                //ASK NECESSARY QUESTIONS AND VALIDATE SOME OF THEM
                {
                type: 'input',
                name: 'name',
                message: 'Please enter the name of team manager.(Required)',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name!');
                        return false;
                    }
                }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is manager's ID number?",
                    validate: idInput => {
                        // check if input value is not a NAN(NOT A NUMBER)
                        if (!isNaN(idInput)) {
                            return true;
                        } else {
                            console.log('Please enter an ID number!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is manager's email?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter an email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumb',
                    message: "What is manager's office number?",
                    validate: officeNumInput => {
                        // check if input value is not a NAN(NOT A NUMBER)
                        if (!isNaN(officeNumInput)) {
                            return true;
                        } else {
                            console.log('Please enter an office number!');
                            return false;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'addMoreEmpl',
                    message: 'Do you want to add more employees?',
                    choices: ['add engineer', 'add intern', 'complete']
                }
            ])
            // after got answers create an object Manager and based on selected list item send to next action 
            .then(( answers ) => {
                this.manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumb);
                if (answers.addMoreEmpl === "add engineer") {
                    // in this case start function with prompts to create engineer obj
                    this.promptEngineer();
                }
                else if (answers.addMoreEmpl === "add intern") {
                    // in this case start function with prompts to create intern obj
                    this.promptIntern();
                }
                else {
                    // in this case send created object to function that generate markdown
                    return generateMarkdown(this);
                }
            })
    }
    // PROMPT FOR INTERN
    promptIntern() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter the name of intern.(Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is intern's ID number?",
                    validate: idInput => {
                        if (!isNaN(idInput)) {
                            return true;
                        } else {
                            console.log('Please enter an ID number!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is intern's email?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter an email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What is intern's school?",
                    validate: schoolInput => {
                        if (schoolInput) {
                            return true;
                        } else {
                            console.log('Please enter a school!');
                            return false;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'addMoreEmpl',
                    message: 'Do you want to add more employees?',
                    choices: ['add engineer', 'add intern', 'complete']
                }
            ])
            .then((answers) => {
                this.interns.push(new Intern(answers.name, answers.id, answers.email, answers.school));
                if (answers.addMoreEmpl === "add engineer") {
                    this.promptEngineer();
                }
                else if (answers.addMoreEmpl === "add intern") {
                    this.promptIntern();
                }
                else {
                    console.log(this);
                    return generateMarkdown(this);
                }
            });
    };
    // PROMPT FOR ENGINEER
    promptEngineer() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter the name of engineer.(Required)',
                    validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is engineer's ID number?",
                    validate: idInput => {
                        if (!isNaN(idInput)) {
                            return true;
                        } else {
                            console.log('Please enter an ID number!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is engineer's email?",
                    validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log('Please enter an email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'github',
                    message: "What is engineer's github username?",
                    validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log('Please enter a github username!');
                            return false;
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'addMoreEmpl',
                    message: 'Do you want to add more employees?',
                    choices: ['add engineer', 'add intern', 'complete']
                }
            ])

            .then((answers) => {
                this.engineers.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
                if (answers.addMoreEmpl === "add engineer") {
                    this.promptEngineer();
                }
                else if (answers.addMoreEmpl === "add intern") {
                    this.promptIntern();
                }
                else {
                    return generateMarkdown(this);
                }
            });
    }
}

module.exports = addNewEmployee;