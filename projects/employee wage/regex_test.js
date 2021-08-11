var mobile = "91 9146316452"
var mob_rgx = /^[\d]{2}[ ][6789][\d]{9}$/;

console.log(mob_rgx.test(mobile))

var email_rgx = /^([a-zA-Z0-9_])+(@)(\w)+(.)([a-zA-Z]){2,3}(.)?(\w){2,3}?$/
var email = "apanthi08@gmail.co"
console.log(email_rgx.test(email))

// uname - number, space
var uname_rgx = /^([A-Z])([\w]){1}([\w])+$/
var uname1 = "am"
var uname2 = "am032"
var uname3 = "Am023"
console.log(uname_rgx.test(uname1))
console.log(uname_rgx.test(uname2))
console.log(uname_rgx.test(uname3))

//gender - M or F
var gender_rgx = /^[MF]$/
var gen1 = "Male"
var gen2 = "F"
console.log(gender_rgx.test(gen1))
console.log(gender_rgx.test(gen2))