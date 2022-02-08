let js = 'me';
if (js === 'me') alert('Welcome!');
console.log(45 + 56);
let myFirstJob = 'Developer';
let myCurrentJob = 'Teaching';
console.log(myFirstJob);
console.log(myCurrentJob);

//Declare a new variable
let country = 'India'
let continent = 'Asia'
let population = 'ONE BILLION THREE HUNDRED EIGHTY MILLION FOUR THOUSAND THREE HUNDRED EIGHTY-FIVE'

//writing a variable
console.log('country = ' + country)
console.log('continent = ' + continent)
console.log('population = ' + population)

console.log(true)
let yourAge = 12
console.log(typeof yourAge)
console.log(yourAge)

// updating a variable
yourAge = 36
console.log(yourAge)

// basic operator

const a = 18
const b = 20
const c = a > b
console.log("Result : " + c)

const A = 24
const B = 26
const Mul = A * B
const Pow = A ** B

console.log(A, B, Mul, Pow)

// concanting string

const firstName = 'Jo'
const job = 'Developer'
const birthYear = '2000'

const finalString = "I'am " + firstName + ", my job is " + job + " and my birth-year " + birthYear
console.log(finalString)

// template 

const temp = `I' ${firstName} `
console.log(temp)

// if - else

const money = 5

if (money >= 30) {
    console.log("You can Bye this products");
} else {
    console.log("Sorry! you don't have enough money")

}

// type conversion

const yourAgeYear = '1919';
console.log(Number(yourAgeYear), yourAgeYear)
console.log(Number(yourAgeYear) + 18);

console.log(Number('Job'));
console.log(typeof NaN);

console.log(String(23), 3);

// type coercion

console.log('I am ' + 23 + ' year old');
console.log('10' - '5');
console.log('23' / '2')

// prompt

const X = prompt("Your value")
if (X % 2 == 0) {
    alert("Even number!")
} else {
    alert("Odd Number")
}