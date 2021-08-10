class EmployeePayroll{
    constructor(id, name, salary, gender, start_date){
        this.e_id = id
        this.e_name = name
        this.e_salary = salary
        this.e_gender = gender
        this.e_startDate = start_date
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

    showDetails(){
        console.log(`Employee ID: ${this.e_id}\nEmployee Name: ${this.e_name}\nEmployee Salary: ${this.e_salary}\
        \nGender: ${this.e_gender}\nStart Date: ${this.e_startDate}`)
    }
}

ramEmployee = new EmployeePayroll("E001242069", "Ram", 4200, "Male", "23/10/2019")
ramEmployee.showDetails()
ramEmployee.setSalary(6000)
ramEmployee.showDetails()