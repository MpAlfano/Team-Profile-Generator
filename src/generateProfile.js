//Make Manager card
const generateManager = function (manager) {
  return `
  <div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>${manager.name}</h3>
          <h4>Manager</h4><i class="material-icons">content_paste</i>
      </div>
      <div class="card-body">
          <p class="id">ID: ${manager.id}</p>
          <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
          <p class="office">Office Number: ${manager.officeNumber}</p>
      </div>
  </div>
  </div>  
  `
}

//Create Engineer card(s)
const generateEngineer = function (engineer) {
  return `
  <div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>${engineer.name}</h3>
          <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
      </div>
      <div class="card-body">
          <p class="id">ID: ${engineer.id}</p>
          <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
          <p class="github">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
      </div>
  </div>
</div>
`
}

//Create intern card(s)
const generateIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
}

function generateProfile(employees) {

  cards = [];

  for(let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const role = employee.getRole();

    //manager function callsites
    if(role === 'Manager') {
      const managerCard = generateManager(employee);

      cards.push(managerCard);
    }
    if(role === 'Engineer') {
      const engineerCard = generateEngineer(employee);

      cards.push(engineerCard);
    }
    if(role === 'Intern') {
      const internCard = generateIntern(employee);

      cards.push(internCard);
    }
  }
  
  const employeeCards = cards.join('');
  const employeeTeam = generateHTML(employeeCards);
  
  return employeeTeam;

}

const generateHTML = function (employeeCards) {

    return `
<!DOCTYPE html>    
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
        <header>
            <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
              <div class="container">
                  <div class="row justify-content-center" id="team-cards">

                    <!--Adding employee Cards-->
                    ${employeeCards}
                  </div>
              </div>


      </main>
  </body>
</html>

  `
}
  module.exports = generateProfile;