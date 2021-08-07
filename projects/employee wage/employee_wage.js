let constant_values = require("./constants.js") 

console.log(constant_values.FULL_TIME)


console.log("Welcome to Employee Wage.")

// UC1 - Attendance Check

const IS_ABSENT = 0
let currEmpAttendance = Math.floor(Math.random() * 10) % 2 //0 or 1 

if (currEmpAttendance == IS_ABSENT){
    console.log("Employee is Absent")
} else {
    console.log("Employee is Present")
}
