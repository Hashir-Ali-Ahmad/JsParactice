const user = {
    username: "hashir",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "ali"
user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "hashir"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hashir"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hashir"
    console.log(username);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hashir"})


console.log(addTwo(3, 4))