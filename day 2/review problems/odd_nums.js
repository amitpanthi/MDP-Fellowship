// Print the odd numbers less than 100
let currNum = 1;

while(currNum <= 100){
    if(currNum % 2 == 0){
        currNum++;
        continue;
    } else {
        console.log(currNum);
    }
    
    currNum++;
}