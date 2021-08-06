// Palindrome Checker
function isPalindrome(word){
    return (word == word.split("").reverse().join(""))
}

console.log(isPalindrome("abcba"))
console.log(isPalindrome("abcb"))