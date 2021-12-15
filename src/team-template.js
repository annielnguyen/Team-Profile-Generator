
//manager profile template
const generateTeam = (team) => {
  // generate Employee profile
  const generateEmployee = (employee) => {
    return `
    <div class="card mx-auto" style="width: 18rem">
    <h5 class="card-header">${employee.getName()}<br /><br />${employee.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
    </ul>
</div> 
    `;
};
    // create the manager html
    const generateManager = (manager) => {
        return `
        <div class="card mx-auto" style="width: 18rem">
        <h5 class="card-header">${manager.getName()}<br /><br />${manager.getRole()}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div> 
        `;
  };

//create engineer html
const generateEngineer = (engineer) => {
    return `
    <div class="card mx-auto" style="width: 18rem">
    <h5 class="card-header">${engineer.getName()}<br /><br />${engineer.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub Username: ${engineer.getGithub()}</li>
    </ul>
</div> 
    `;
};

//create intern html
const generateIntern = (intern) => {
    return `
    <div class="card mx-auto" style="width: 18rem">
    <h5 class="card-header">${intern.getName()}<br /><br />${intern.getRole()}</h5>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
</div> 
    `;
};
const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

// exporting function to generate the team page
module.exports = (team) => {
  return `

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <title>Annie's Team</title>
  </head>
  <body>
       <!--Heading-->
       <div class="card-body bg-dark text-center text-white">
          <div class="container">
          <h1>Annie's Team</h1>
          </div>
      </div>
      <div class="container">
      <div class="row">
          <div class="team-area col-12 d-flex justify-content-center">
              ${generateTeam(team)}
          </div>
      </div>
  </div>
</body>
</html>
  `;
};   
