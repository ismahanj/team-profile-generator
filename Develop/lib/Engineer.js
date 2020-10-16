// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer {
    constructor(gitHub){
    this.gitHub = gitHub
    }; 
  

getGithub(){
    return "GitHubUser"; 
}
getRole(){
    return "Engineer"; 

}
}

module.exports = Engineer;