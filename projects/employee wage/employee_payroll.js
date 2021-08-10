class EmployeePayroll{
    constructor(id, name, salary){
        this.e_id = id
        this.e_name = name
        this.e_salary = salary
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
        console.log(`Employee ID: ${this.e_id}\nEmployee Name: ${this.e_name}\nEmployee Salary: ${this.e_salary}`)
    }
}

ramEmployee = new EmployeePayroll("E001242069", "Ram", 4200)
ramEmployee.showDetails()
ramEmployee.setSalary(6000)
ramEmployee.showDetails()