let constant_values = require("./constants.js") 

console.log(constant_values.FULL_TIME)

// UC1 - Greeting
console.log("Welcome to Employee Wage.")

// UC2 - Attendance
/*
const IS_ABSENT = 0
let currEmpAttendance = Math.floor(Math.random() * 10) % 2 //0 or 1 

if (currEmpAttendance == IS_ABSENT){
    console.log("Employee is Absent")
} else {
    console.log("Employee is Present")
}
*/

// UC3
let wage = 0
let workShift = Math.floor(Math.random() * 10) % 3

function getDailyPay(workShift){
    switch(workShift){
        case 1: // Full Time
            wage = constant_values.WAGE_PER_HR * constant_values.FULL_TIME
            console.log("Wage for full time: " + wage)
            break;
        
        case 0: // Part Time
            wage = constant_values.WAGE_PER_HR * constant_values.PART_TIME
            console.log("Wage for part time: " + wage)
            break;
        
        default: // Absent
            wage = 0
            console.log("Wage when absent: " + wage)
    }

    return wage
}


// UC4
/*
let totalWage = 0
let fullTimeCounter = 0
let partTimeCounter = 0
let absentCounter = 0
const DAYS_IN_MONTH = 20

for(let day=0; day < DAYS_IN_MONTH; day++){
    let currWorkShift = Math.floor(Math.random() * 10) % 3

    switch(currWorkShift){
        case 1: // Full Time
            todayWage = WAGE_PER_HR * FULL_TIME
            fullTimeCounter += 1
            break;
        
        case 0: // Part Time
            todayWage = WAGE_PER_HR * PART_TIME
            partTimeCounter += 1
            break;
        
        default:
            todayWage = 0
            absentCounter += 1
            break;
    }

    totalWage += todayWage
}

console.log("Total Wage:" + totalWage)
console.log("Days worked Full Time: " + fullTimeCounter)
console.log("Days worked Part Time: " + partTimeCounter)
console.log("Days absent: " + absentCounter)
*/

// UC5

function calcMonthlyWage(){
    let totalHours = 0
    let todayHours = 0
    let fullTimeCounter = 0
    let partTimeCounter = 0
    let absentCounter = 0

    for(var day=1; day < Number.MAX_VALUE; day++){
        if(totalHours >= 160 || day >= 20){
            break;
        }

        let currWorkShift = Math.floor(Math.random() * 10) % 3

        switch(currWorkShift){
            case 1: // Full Time
                todayHours = constant_values.FULL_TIME
                fullTimeCounter += 1
                break;
            
            case 0: // Part Time
                todayHours = constant_values.PART_TIME
                partTimeCounter += 1
                break;
            
            default:
                todayHours = 0
                absentCounter += 1
                break;
        }

        totalHours += todayHours
    }

    totalWage = totalHours * constant_values.WAGE_PER_HR

    console.log("--------------------------------")
    console.log("Total Wage:" + totalWage)
    console.log("Hours worked:" + totalHours)
    console.log("Days passed: " + day)
    console.log("Days worked Full Time: " + fullTimeCounter)
    console.log("Days worked Part Time: " + partTimeCounter)
    console.log("Days absent: " + absentCounter)
}

calcMonthlyWage()