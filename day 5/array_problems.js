// Find second largest and second smallest number
function findSecondLargestAndSmallest(){
    // Generate 10 Random 3 Digit number
    let numberGen = () => {return Math.floor(Math.random() * (899) + 100)}
    let randomNums = []

    // Store this random numbers into a array
    for(let i = 0; i < 10; i++){
        randomNums.push(numberGen())
    }

    // Find the 2nd largest and the 2nd smallest element without sorting the array
    let biggest = Number.MIN_VALUE
    let secondBiggest = Number.MIN_VALUE
    let smallest = Number.MAX_VALUE
    let secondSmallest = Number.MAX_VALUE

    for(const val of randomNums){
        if(val >= biggest){
            secondBiggest = biggest
            biggest = val
        } else if (val >= secondBiggest){
            secondBiggest = val
        }

        if(val <= smallest){
            secondSmallest = smallest
            smallest = val
        } else if (val <= secondSmallest){
            secondSmallest = val
        }
    }

    console.log(randomNums)
    console.log(`Second Biggest: ${secondBiggest}\nSecond Smallest:${secondSmallest}`)

    //Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.
    console.log("After sorting")
    randomNums = randomNums.sort()
    console.log(`Second Biggest: ${randomNums[8]}\nSecond Smallest:${randomNums[1]}`)
}

findSecondLargestAndSmallest()