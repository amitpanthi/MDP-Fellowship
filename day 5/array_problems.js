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

// Extend the Prime Factorization Program to store all the Prime Factors of a number n into an array and finally display the output.
function displayPrimeFactors(number){
    smallestPrimes = new Array(number + 1)

    for(let iter=1; iter <= number; iter++){
        smallestPrimes[iter] = iter
        
    }

    for(let iter=4; iter<=number; iter+=2){
        smallestPrimes[iter] = 2
    }

    for(let iter=3; iter*iter < number; iter++){
        if(smallestPrimes[iter] == iter){
            for(let j = iter*iter; j<number; j+=iter){
                if(smallestPrimes[j] == j){
                    smallestPrimes[j] = iter
                }
            }
        }
    }

    let primeFactors = []
    let ogNumber = number

    while(number != 1){
        primeFactors.push(smallestPrimes[number])
        number = number/smallestPrimes[number]
    }

    console.log(`Prime Factors for ${ogNumber} are ${primeFactors.join(", ")}`)
}

displayPrimeFactors(200)


// Program to show sum of three integer adds to ZERO
function findTriplets(array){
    let triplets = []
    let foundValIdx = new Set()
    
    for(let i = 0; i < array.length; i++)
        for(let j = 0; j < array.length; j++){
            if(i == j || (foundValIdx.has(i) && foundValIdx.has(j))){
                continue;
            }

            
            if(array.find((num) => {return num == -1*(array[i] + array[j])})){
                triplets.push([array[i], array[j], -1*(array[i] + array[j])])
                foundValIdx.add(i)
                foundValIdx.add(j)
                foundValIdx.add(array.findIndex((num) => {return num == -1*(array[i] + array[j])}))
            } 
            
        }

    console.log(triplets)
}

let numbers = [-1, -2, 0, 3, 99, 100, -199]
findTriplets(numbers)

// Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,etc and store them in an array
function findSimilarNumbers(upper_limit){
    let units_v = 1
    let tens_v = 1
    let similarNumbers = []
    let currNum = 0

    while(currNum < upper_limit){
        currNum = tens_v*10 + units_v
        if(currNum > upper_limit){
            break;
        }

        similarNumbers.push(currNum)

        units_v += 1
        tens_v  += 1
    }

    console.log(similarNumbers)
}

findSimilarNumbers(100)