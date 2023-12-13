let age = 35
const gravity = 9.81
let mass = 72
const PI = 3.14

console.log(age, gravity, mass, PI)

// Math Object
const PI2 = Math.PI
console.log(PI2) 

// Random
let randomNum = Math.random() // 0 - 0.9999...
let numBtnZeroAndTen = randomNum * 11
console.log(numBtnZeroAndTen)

let flooran = Math.floor(numBtnZeroAndTen)
console.log(flooran)

// Strings
let ime = "Bruno"
let prezime = "Petkovic"

let fullIme = ime + " " + prezime
console.log(fullIme)


// Template Literals (Template Strings)

console.log(`The sum of 2 and 3 is 5`)
let a = 2
let b = 3
console.log(`the sum of ${a} and ${b} is ${a + b}`) // noraju biti backticks
console.log("the sum of ${a} and ${b} is ${a + b}")

