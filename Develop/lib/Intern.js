// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern {
    constructor(school){
        this.school = school

}; 
getSchool(){
    return "UCLA"; 
}
getRole(){
    return "Intern"; 

}

}
module.exports = Intern; 