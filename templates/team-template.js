
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

