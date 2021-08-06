// Create a function that will return a Boolean specifying if a number is prime
function isNumPrime(number){
    let isPrime = true

    for(iter = 2; iter <= Math.ceil(number/2); iter++){
        if(number % iter == 0){
            isPrime = false
            break
        }
    }

    return isPrime
}

console.log(isNumPrime(13))
console.log(isNumPrime(15))
console.log(isNumPrime(113))