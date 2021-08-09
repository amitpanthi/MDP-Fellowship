// Find the missing number in a given integer array of 1 to 100? 
let threeMissing = [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
let ninetyNineMissing = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 100]

function findMissingNum(array){
    let upper_number = array.length + 1
    let totalSum = upper_number * (upper_number + 1) / 2
    let arraySum = 0

    for(let iter = 0; iter < array.length; iter++){
        arraySum += array[iter]
    }
    return totalSum - arraySum
}

console.log(findMissingNum(threeMissing))
console.log(findMissingNum(ninetyNineMissing))

// Find the largest and smallest number in an unsorted integer array?
let numbers = [1, 24, 5, 232, 999, -5, 0, 64, -100]

function findSmallestAndBiggest(array){
    let biggest = Number.MIN_VALUE
    let smallest = Number.MAX_VALUE

    for(const val of array){
        biggest = Math.max(biggest, val)
        smallest = Math.min(smallest, val)
    }

    return [biggest, smallest]
}

console.log(findSmallestAndBiggest(numbers))


// Find all pairs of an integer array whose sum is equal to a given number
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function findPairWithSum(array, sum_val){
    let pairs = []
    let runningValues = new Set()

    for(const val of array){
        if(runningValues.has(sum_val - val)){
            pairs.push([sum_val - val, val])
            runningValues.delete(sum_val - val)
        } else {
            runningValues.add(val)
        }
    }

    return pairs
}

console.log(findPairWithSum(numbers, 3))

// Find duplicate numbers in an array if it contains multiple duplicates
numbers = [11, 21, 11, 42, 42, 42, 3]

function findDuplicates(array){
    let uniqueNumbers = new Set()
    let duplicates = []

    for(const num of numbers){
        if(uniqueNumbers.has(num)){
            if(duplicates.includes(num)){
                continue
            } else {
                duplicates.push(num)
            }
        } else {
            uniqueNumbers.add(num)
        }
    }

    return duplicates
}

console.log(findDuplicates(numbers))

// Find the Union and Intersection of the two sorted arrays
let numsOne = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let numsTwo = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

function arrIntersection(arr1, arr2){
    let intersection = arr1.filter(number => arr2.includes(number))
    return intersection
}

function arrUnion(arr1, arr2){
    let union = [...arr1, ...arr2]
    return Array.from(new Set(union))
}

console.log(arrIntersection(numsOne, numsTwo))
console.log(arrUnion(numsOne, numsTwo))