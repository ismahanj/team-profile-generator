const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Choices = require("inquirer/lib/objects/choices");

// empty array of team members
const teamArray = []


// Write code to use inquirer to gather information about the development team members,
function createTeam() {
    inquirer.prompt({
        type: "list",
        name: "choices",
        message: "What is the role of this employee?",
        choices: ["Manager", "Engineer", "Intern"]
    }).then(function ({ choices }) {
// and to create objects for each team member (using the correct classes as blueprints!)
            switch (choices) {
                case "Manager":
                    createManager(); 
                
                    break; 

                 case "Engineer":
                    createEngineer();
                    break; 

                 case "Intern":
                   createIntern();
                    break; 

                default:
                        console.log("thanks for building your team!")
                        // function for building team into team.html
                        myTeam(); 
                        break;
                }
            })
        }          

        function createManager() {
           //questions for manager
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'managerName',
                    message: 'enter the name of the manager'
                },
                {
                    type: 'input',
                    name: 'managerID',
                    message: 'enter the id of the manager'
                },
                {
                    type: 'input',
                    name: 'managerEmail',
                    message: 'enter the email address of the manager'
                },
                {
                    type: 'input',
                    name: 'office',
                    message: 'enter the office number of the manager'
                }
            ]).then((response) => {
                const { managerName, managerID, managerEmail, office } = response;
                // create a new manager object/instance
                const manager = new Manager(managerName, managerID, managerEmail, office);
                teamArray.push(manager);
                createTeam();
            })
        }

    function createEngineer(){

//questions for engineer
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'Enter the name of this engineer'
            },
            {
                type: 'input',
                name: 'engineerID',
                message: 'Enter the ID of this engineer'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'Enter the email address of this engineer'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Enter the github address of this engineer'
            }
        ]).then((response) => {
            const { engineerName, engineerID, engineerEmail, github } = response;
            //create a new instance of an engineer
            const engineer = new Engineer(engineerName, engineerID, engineerEmail, github);
            teamArray.push(engineer);
            createTeam(); 
        })
    }

    function createIntern (){
        inquirer.prompt([
            {
                type: 'input',
                name: 'internName',
                message: 'Enter the name of the intern'
            },
            {
                type: 'input',
                name: 'internID',
                message: 'Enter the ID of the intern'
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'Enter the email address of the intern'
            },
            {
                type: 'input',
                name: 'school',
                message: 'Enter the school of the intern'
            }

        ]).then((response) =>{
            const { internName, internID, internEmail, school } = response;
            // create a new instance of an intern
            const intern = new Intern(internName, internID, internEmail, school);
            teamArray.push(intern);
            createTeam();
        })
    }

    function myTeam() {
        fs.writeFile(outputPath, render(teamArray), (err) => {
            if (err) {
                return console.log('ERR', err);
            }
        })
    }

    // restart the choices
    createTeam();     


