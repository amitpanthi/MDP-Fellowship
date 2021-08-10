class EmployeePayroll{
    constructor(...params){
        this.e_id = params[0]
        this.e_name = params[1]
        this.e_salary = params[2]
        this.e_gender = params[3]
        this.e_startDate = params[4]
    }

    setName(new_name){
        this.e_name = new_name
    }

    setID(new_id){
        this.e_id = new_id
    }

    setSalary(new_salary){
        this.e_salary = new_salary
    }

    setGender(new_gender){
        this.e_gender = new_gender
    }

    setName(new_name){
        this.e_name = new_name
    }

    setID(new_id){
        this.e_id = new_id
    }

    setSalary(new_salary){
        this.e_salary = new_salary
    }

    showDetails(){
        console.log(`Employee ID: ${this.e_id}\nEmployee Name: ${this.e_name}\nEmployee Salary: ${this.e_salary}\
        \nGender: ${this.e_gender}\nStart Date: ${this.e_startDate}`)
    }
}

ramEmployee = new EmployeePayroll("E001242069", "Ram", 4200, "Male", "23/10/2019")
ramEmployee.showDetails()
ramEmployee.setSalary(6000)
ramEmployee.showDetails()