/*
A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. 
You have to implement a function that returns the total number of legs of all the animals

example : animals(2, 3, 5) ➞ 36 
                  animals(1, 2, 3) ➞ 22
*/

function countLegs(chickens, cows, pigs){
    const CHICKEN_LEGS = 2
    const COW_LEGS = 4
    const PIG_LEGS = 4

    return chickens*CHICKEN_LEGS + cows*COW_LEGS + pigs*PIG_LEGS
}

console.log(countLegs(2, 3, 5))
console.log(countLegs(1, 2, 3))
