console.log("Accout Details")

const accountId = 12345
let accountName = "Hashir"
var accountMail = "hashir.47@gmail.com"
accountCity = "Rahim Yar Khan"

/*
Can't assign to a const variable
accountId = 2 
 console.log(accountId) */

// We can reassign a let variable 
accountName = "Hashir Ali Ahmad"
console.log(accountName) 

console.table([accountId,accountName,accountMail,accountCity])
