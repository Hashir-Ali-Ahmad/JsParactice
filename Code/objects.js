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

// console.log(Object.keys(self)); // array format
// console.log(Object.values(self));
// console.log(Object.entries(self)); // keys and values in array format
// console.log(self.hasOwnProperty('isLoggedIn'));

self.email = "hashir.47a@gmail.com"
self.greeting = function () {
    console.log(`Hi, I'm ${this.name} from ${this.city}, ${this.country}`);
}

// console.log(self);
// console.log(self.greeting())

let self2 = {
    name : {
        fullname : "Hashir Ali Ahmad"
    }
}

// console.log(self2.name.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4)
const obj5 = { ...obj2, ...obj3}
// console.log(obj5)

//.................................. Object Inside Array

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]

// console.log(users[2].id);
// console.log(users[2].email);

//.................................... De-Structuring of Objects
const course = {
    coursename: "JavaScript",
    price: "200$",
    courseInstructor: "Meta"
}

const {courseInstructor} = course
const {courseInstructor: ins} = course

// console.log(course.courseInstructor);
// console.log(courseInstructor);
// console.log(ins);

// ..................................Json
// Json is like objects but it doesn't name and keys are in string
/* 
{
    "1" : "a",
    "2" : "b",
    "3" : "c"
}
*/ 