'use strict';

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const lengthCharacters = characters.length;
let result = '';

function generateKey (length, characters) {

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * lengthCharacters);
        result += characters[randomIndex];
    }
    return result;
}
const randomString = generateKey(16, characters);
console.log(randomString);


























// let newString = '';
// let counter = 0;
// function generateKey(length, characters) {
//
//     while (counter < length) {
//         newString += characters.charAt(Math.floor(Math.random() * lengthCharacters));
//         counter += 1;
//     }
//     return newString;
// }
// const result = generateKey(16, characters);
// console.log(result);