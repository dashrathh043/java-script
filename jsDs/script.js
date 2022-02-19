'use strict'

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

var [x] = arr;
console.log(x)

var [x, y] = arr;
console.log(x, y)

var [x, y, z] = arr;
console.log(x, y, z)