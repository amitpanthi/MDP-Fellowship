// UC3
const FULL_TIME = 8
const PART_TIME = 4
const WAGE_PER_HR = 20

let wage = 0
let workShift = Math.floor(Math.random() * 10) % 3

function getDailyPay(workShift){
    switch(workShift){
        case 1: // Full Time
            wage = WAGE_PER_HR * FULL_TIME
            console.log("Wage for full time: " + wage)
            break;
        
        case 0: // Part Time
            wage = WAGE_PER_HR * PART_TIME
            console.log("Wage for part time: " + wage)
            break;
        
        default: // Absent
            wage = 0
            console.log("Wage when absent: " + wage)
    }

    return wage
}

getDailyPay(workShift)

// UC4
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