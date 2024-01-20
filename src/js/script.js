'use strict';

const getRandomNum = function () {
const arr = [];

while (arr.length < 100 ) {

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(randomNumber) === -1) arr.push(randomNumber);
  }
 return arr;

}
console.log(`Yor random number: ${getRandomNum()}`)







