let constant_values = require("./constants.js") 

// UC7 - Employee Wage Class
class EmployeeWage{
    constructor(name){
        this.name = name
        this.latestAttendance = 0 // 0 - Part Time, 1 - Full Time, 2 - Absent
    }


    greet(){
        console.log(`Hi ${this.name}, Welcome to Employee Wage!`)
    }


    getAttendance(){
        const IS_ABSENT = 2
        this.latestAttendance = Math.floor(Math.random() * 10) % 3 //0 or 1 or 2 
        let currEmpAttendance = this.latestAttendance
        if (currEmpAttendance == IS_ABSENT){
            console.log("Employee is Absent")
        } else if (currEmpAttendance == 1){
            console.log("Employee is Present - Full Time")
        } else {
            console.log("Employee is Present - Part Time")
        }

        return currEmpAttendance
    }


    calcFullTime(){
        return constant_values.FULL_TIME * constant_values.WAGE_PER_HR
    }


    calcPartTime(){
        return constant_values.PART_TIME * constant_values.WAGE_PER_HR
    }


    getDailyPay(){
        let wage
        let workShift = this.latestAttendance

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


    getMonthlyPay(){
        let todayWage = 0
        let totalWage = 0
        let fullTimeCounter = 0
        let partTimeCounter = 0
        let absentCounter = 0

        for(let day=0; day < constant_values.DAYS_IN_MONTH; day++){
            let currWorkShift = Math.floor(Math.random() * 10) % 3
        
            if(day == constant_values.DAYS_IN_MONTH - 1){
                currWorkShift = this.latestAttendance
            }

            switch(currWorkShift){
                case 1: // Full Time
                    todayWage = constant_values.WAGE_PER_HR * constant_values.FULL_TIME
                    fullTimeCounter += 1
                    break;
                
                case 0: // Part Time
                    todayWage = constant_values.WAGE_PER_HR * constant_values.PART_TIME
                    partTimeCounter += 1
                    break;
                
                default: // Absent
                    todayWage = 0
                    absentCounter += 1
                    break;
            }
        
            totalWage += todayWage
        }
        
        console.log("----------MONTHLY PAY----------")
        console.log("Total Wage:" + totalWage)
        console.log("Days worked Full Time: " + fullTimeCounter)
        console.log("Days worked Part Time: " + partTimeCounter)
        console.log("Days absent: " + absentCounter)
    }


    maxWorkingHours(){
        let totalWage = 0
        let totalHours = 0
        let todayHours = 0
        let fullTimeCounter = 0
        let partTimeCounter = 0
        let absentCounter = 0

        for(var day=1; day <= 20; day++){
            if(totalHours >= 160){
                break;
            }

            let currWorkShift = Math.floor(Math.random() * 10) % 3
            if(day == constant_values.DAYS_IN_MONTH - 1){
                currWorkShift = this.latestAttendance
            }

            switch(currWorkShift){
                case 1: // Full Time
                    todayHours = constant_values.FULL_TIME
                    fullTimeCounter += 1
                    break;
                
                case 0: // Part Time
                    todayHours = constant_values.PART_TIME
                    partTimeCounter += 1
                    break;
                
                default: //Absent
                    todayHours = 0
                    absentCounter += 1
                    break;
            }

            totalHours += todayHours
        }

        totalWage = totalHours * constant_values.WAGE_PER_HR

        console.log("----------CONDITION BASED MONTHLY PAY----------")
        console.log("Total Wage:" + totalWage)
        console.log("Hours worked:" + totalHours)
        console.log("Days passed: " + (day - 1))
        console.log("Days worked Full Time: " + fullTimeCounter)
        console.log("Days worked Part Time: " + partTimeCounter)
        console.log("Days absent: " + absentCounter)
    }


    monthlyPayBreakdown(){
        let totalWage = 0
        let totalHours = 0
        let todayHours = 0
        let fullTimeCounter = 0
        let partTimeCounter = 0
        let absentCounter = 0
        let wages = []
        let workHours = [] 

        for(var day=1; day <= 20; day++){
            if(totalHours >= 160){
                break;
            }

            let currWorkShift = Math.floor(Math.random() * 10) % 3
            if(day == constant_values.DAYS_IN_MONTH - 1){
                currWorkShift = this.latestAttendance
            }

            switch(currWorkShift){
                case 1: // Full Time
                    todayHours = constant_values.FULL_TIME
                    fullTimeCounter += 1
                    break;
                
                case 0: // Part Time
                    todayHours = constant_values.PART_TIME
                    partTimeCounter += 1
                    break;
                
                default: //Absent
                    todayHours = 0
                    absentCounter += 1
                    break;
            }

            workHours.push(todayHours)
            wages.push(todayHours * constant_values.WAGE_PER_HR)
            totalHours += todayHours
        }

        totalWage = totalHours * constant_values.WAGE_PER_HR

        console.log("----------PER DAY BREAKDOWN MONTHLY PAY----------")
        console.log("Per Day Hours worked: " + workHours.join(", "))
        console.log("Per Day Wage earned: " + wages.join(", "))
        console.log("Total Wage:" + totalWage)
        console.log("Hours worked:" + totalHours)
        console.log("Days passed: " + (day - 1))
        console.log("Days worked Full Time: " + fullTimeCounter)
        console.log("Days worked Part Time: " + partTimeCounter)
        console.log("Days absent: " + absentCounter)
    }


    displayReport(){
        this.greet()
        this.getAttendance()
        this.getDailyPay()
        this.getMonthlyPay()
        this.maxWorkingHours()
        this.monthlyPayBreakdown()
    }
}

let john_wage = new EmployeeWage("John")
let akash_wage = new EmployeeWage("Akash")

john_wage.displayReport()
akash_wage.displayReport()