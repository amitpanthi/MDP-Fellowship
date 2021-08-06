// Find the maximum number in an array of numbers
let numbers = [-12, -23, -42, 0, 23, 121, 2, 6, 99, 333, 10, -32, -1]

function findMaxNum(numbers){
    let currMax = Number.MIN_VALUE
    
    for(let iter = 0; iter < numbers.length; iter++){
        currMax = Math.max(currMax, numbers[iter])
    }

    return currMax
}

console.log(findMaxNum(numbers))