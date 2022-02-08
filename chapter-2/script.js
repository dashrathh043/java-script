'use strict';

var hasProduct = false
const money = 50

if (money >= 50) hasProduct = true
if (hasProduct) console.log("I am buying the product!")


// function declaration
function sum(a, b) {
    return a + b
}

// function expression
const calAge = function(birthYear) {
    return 1976 - birthYear
}
console.log(calAge(1925))


// arrow function
const calAge3 = birthYear => 2045 - birthYear;
console.log(calAge(1923))


// function calling inside other function

function mix(a) {
    const b = sum(a, a) + sum(a, a)
    return b
}

console.log(mix(25))


// array

const array = [1, 2, 3, 4, 5, '6', 7, 8, 9]
console.log(array[0])
console.log(array[5])
console.log(array.length)


const array1 = new Array('1', '2', '3')
console.log(array1)

// iteration loop

for (var i = 1; i <= 10; i++) {
    console.log(`${i}`)
}