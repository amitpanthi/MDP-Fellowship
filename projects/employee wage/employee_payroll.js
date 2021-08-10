class EmployeePayroll{
    constructor(id, name, salary){
        this.e_id = id
        this.e_name = name
        this.e_salary = salary
    }

    showDetails(){
        console.log(`Employee ID: ${this.e_id}\nEmployee Name: ${this.e_name}\nEmployee Salary: ${this.e_salary}`)
    }
}

ramEmployee = new EmployeePayroll("E001242069", "Ram", 4200)
ramEmployee.showDetails()