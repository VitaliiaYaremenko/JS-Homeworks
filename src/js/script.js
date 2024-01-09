'use strict';

const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    console.log(sum);
}

// ____________________________________

const array = [1, 2, 3, 4, 5];
let square = 0;

for (let i = 0; i < array.length; i++) {
    square = square + (Math.pow(array[i], 2));
    console.log(square);
}

// for (let i in array) {
//     array[i] = array[i]**2;
//     console.log(array);
// }