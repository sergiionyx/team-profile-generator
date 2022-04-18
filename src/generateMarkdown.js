// get function to create html file (from other js file)
const writeToFile  = require('../utils/generateHTML.js');

// GENERATE HTML PAGE BY PUTTING TOGETHER AVAILABLE ITEMS (MANAGER + ENGINEER + INTERN)
const generateHTML = data => {
    // refactor income data to object with 3 variables
    const { engineers, interns, manager } = data;
    // return html code for index.html
    return writeToFile(`
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
            integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    
        <title>Team Profile</title>
    </head>
    
    <body>
        <header>
            <div class="bg-danger text-white text-center p-4 mb-5">
                <h1>My Team</h1>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center">
        ${generateManager(manager)}
        ${generateEngineers(engineers)}
        ${generateInterns(interns)}
        </div>
        </div>
    </main>
</body>

</html>
     `)
        // show responce in console.log after file was created
        .then(response => {
            console.log(response);
            return;
        })
        // catch errors and show them if any
        .catch(err => {
            console.log(err);
        });
};

// GENERATE MANAGER CARD
function generateManager(manager) {
    const {name, id, email, officeNumb} = manager;
    return `
<div class="card m-4 col-3 p-0" style="width: 18rem;">
    <div class="card-body bg-primary text-white">
        <h5 class="card-title">
        ${name}
        </h5>
        <p class="card-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-cup-fill" viewBox="0 0 16 16">
                <path
                    d="M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8z" />
            </svg>
            Manager
        </p>
    </div>
    <div class="bg-light">
        <ul class="list-group list-group-flush p-3 py-5">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto: ${email}"> ${email}</a></li>
            <li class="list-group-item">Office number: ${officeNumb}</li>
        </ul>
        <div></div>
    </div>
</div>
    `;
};

// GENERATE ENGINEERS CARD
function generateEngineers(engineers) {
    // using .map go through array and run arrow function for each element 
    return `
        ${engineers
            .map(({ name, id, email, github }) => {
                return `
<div class="card m-4 col-3 p-0" style="width: 18rem;">
    <div class="card-body bg-primary text-white">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">
            <i class="bi bi-sunglasses"></i>
            Engineer
        </p>
    </div>
    <div class="bg-light">
        <ul class="list-group list-group-flush p-3 py-5">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
        </ul>
        <div></div>
    </div>
</div>
        `;
            })
            .join('')
        }
    `;
}

// GENERATE INTERN CARD
function generateInterns(interns) {
    return `    
        ${interns
            .map(({ name, id, email, school }) => {
                return `
<div class="card m-4 col-3 p-0" style="width: 18rem;">
    <div class="card-body bg-primary text-white">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">
            <i class="bi bi-mortarboard-fill"></i>
            Intern
        </p>
    </div>
    <div class="bg-light">
        <ul class="list-group list-group-flush p-3 py-5">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
        <div></div>
    </div>
</div>
                `;
            }
            )
            .join('')}
    `;
}

module.exports = generateHTML;