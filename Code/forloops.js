const arr = [1,2,3,4,5,6,7,8]

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(`Elemnt in array at ${i} is ${element}`);
}

for (const i of arr) {
    // console.log(i);
}

for (const key in arr) {
//   console.log(`Index : ${key} , Value : ${arr[key]}`);
}

let obj = {
    name : "Hashir",
    email : "hashir.47a@gmail.com",
    age : 18
}

//for (const iterator of obj) {
    // console.log(iterator);  // not iterateable
// }

for (const key in obj) {
// console.log(obj.key);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// for (const [key,val] of obj) {
    // console.log(key, value);
 //    }