// Given a string, reverse each word in the sentence.
let line = "Hello how are you?"
let reversed_line = []

splitted_line = line.split(" ")

for(let iter = 0; iter < splitted_line.length; iter++){
    splitted_word = splitted_line[iter].split("")
    reversed_word = splitted_word.reverse()
    joined_word = reversed_word.join("")
    
    reversed_line.push(joined_word)
}

console.log(reversed_line.join(" "))