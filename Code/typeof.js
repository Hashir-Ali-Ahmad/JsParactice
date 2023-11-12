// .............................Premitive datatypes
// String, Int, BigInt, Boolean, Null, undefined, Symbol
let a = 'Hashir'
console.log(typeof a);

let b = 45
console.log(typeof b);

let c = true
console.log(typeof c);

let d = null
console.log(typeof d);

let e;
console.log(typeof e);

const id = Symbol('123')

// Big Int is also premitive

// ..................................Non premitive

let f = function (a,b){
    return a + b
}

console.log(typeof f);

let arr = [1,2,3]

console.log(typeof arr);

let person = {
    name : "hashir",
    age : 18 ,
    city : "RYK"
}
console.log(typeof person);
