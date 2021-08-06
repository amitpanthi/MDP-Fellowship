let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let runningSum = 0

for(let iter = 0; iter < numbers.length; iter++){
    runningSum += numbers[iter]
}

console.log(runningSum)