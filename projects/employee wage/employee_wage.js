let constant_values = require("./constants.js") 

console.log(constant_values.FULL_TIME)


console.log("Welcome to Employee Wage.")

// UC1 - Attendance Check

function attendanceCheck(){
    const IS_ABSENT = 0
    let currEmpAttendance = Math.floor(Math.random() * 10) % 2 //0 or 1 

    if (currEmpAttendance == IS_ABSENT){
        console.log("Employee is Absent")
    } else {
        console.log("Employee is Present")
    }
}


// UC2 - Daily Wage
function fullTimeWage(){
    return constant_values.FULL_TIME * constant_values.WAGE_PER_HR
}


// UC3 - Part Time Wage
function partTimeWage(){
    return constant_values.PART_TIME * constant_values.WAGE_PER_HR
}


// UC4 - Switch Case
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


// UC5 - Monthly Wage
function getMonthlyWage(){
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
}