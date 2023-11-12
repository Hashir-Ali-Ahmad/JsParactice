// Symbol insert in Object
let sign = Symbol ("signature")

let self = {
    name : "Hashir",
    [sign] : "HAA",
    age : "18",
    city : "RYK",
    zip : 64200,
    country : "Pakistan",
    hobbies : ["badminton","cricket","E-sports"] ,
    intro : function () {
        console.log(`My name is ${this.name}`);
    }   
}

// console.log(self);
// console.log(self.intro());
// console.log(self[sign]);

self.email = "hashir.47a@gmail.com"
self.greeting = function () {
    console.log(`Hi, I'm ${this.name} from ${this.city}, ${this.country}`);
}

console.log(self);
console.log(self.greeting())