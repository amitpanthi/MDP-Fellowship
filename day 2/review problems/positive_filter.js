// Create a function that receives an array of numbers and returns an array containing only the positive numbers
let numbers = [-5, -3, -11, -23, 0, 13, 24, 99, 4]

function find_positive(numbers){
    let positive_numbers = []
    
    for(let iter = 0; iter < numbers.length; iter++){
        if(numbers[iter] >= 0){
            positive_numbers.push(numbers[iter])
        }
    }
    return positive_numbers
}

console.log(find_positive(numbers))