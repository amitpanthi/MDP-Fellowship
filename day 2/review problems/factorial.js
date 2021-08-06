// Calculate 10!
let currNum = 10

function factorial(aNumber){
    if(aNumber == 1){
        return 1
    }

    return aNumber * factorial(aNumber - 1)
}

console.log(factorial(currNum))