var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}



console.log(a);
// console.log(b);
// ==== cant access b outside the scope
console.log(c);


function one(){
    const username = "hashir"

    function two(){
        const website = "youtube"
        console.log(username , website);
        // can access from parent
    }
    // console.log(website);
    // cant access website outside scope

     two()

}

one()

if (true) {
    const username = "hashir"
    if (username === "hashir") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))


function addone(num){
    return num + 1
}



// addTwo(5) // cant access let and const before declaration
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))