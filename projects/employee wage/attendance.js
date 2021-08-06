// UC2 - Attendance
const IS_ABSENT = 0
let currEmpAttendance = Math.floor(Math.random() * 10) % 2 //0 or 1 

if (currEmpAttendance == IS_ABSENT){
    console.log("Employee is Absent")
} else {
    console.log("Employee is Present")
}