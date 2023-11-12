let arr1 = [1,2,3,4,5,6]
console.log("Intial Array");
console.log(arr1);

arr1.push(7)
arr1.push(8)
arr1.push(9)
arr1.pop()

arr1.unshift(0)
arr1.unshift(1)
arr1.shift()
console.log("After Push, Pop, Unshift, Shift");
console.log(arr1);

arr1.length
arr1.includes(6)
arr1.indexOf(6)

const arr2 = arr1.slice(2,6)
const arr3 = arr1.splice(1,4)
// console.log(arr2);
// console.log(arr3);
// console.log('After Slice And Splice');
// console.log(arr1);

// console.log(arr1.join()) // Array to String

let one = [1,2,3,4]
let two = [10,11,12,13]
let three = [20,21,22,23]

// let con = one.concat(two,three)
let con = [...one,...two,...three]
// console.log(con);

let mixed = [1,2,3,[3,2,1],10,[9,4,2,5,[3,9]]]
// console.log(mixed);
// console.log(mixed.flat(Infinity));


console.log(Array.isArray("Hashir"))
console.log(Array.from("Hashir"))
console.log(Array.from({name: "hashir"})) // interesting

let a = 100
let b = 200
let c = 300
console.log(Array.of(a,b,c))
