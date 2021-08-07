person = {
    fname: "John",
    lname: "Tron"
}

numbers = [11, 22, 33, 44, 55, 66, 77]

for(const object_key in person){
    console.log(person[object_key])
}

for(const object_key in numbers){
    console.log(object_key)
}

for(const object_val of numbers){
    console.log(object_val)
}