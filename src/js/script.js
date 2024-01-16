'use strict';

const getRandomNum = function () {

    return Math.floor(Math.random() * 101);
}

const arrNum = [];

for (let i = 0; arrNum.length < 100; i++) {

    const randomNumber = getRandomNum();

    if(!arrNum.includes(randomNumber)) {
        arrNum.push(arrNum[randomNumber]);
    }
    console.log(randomNumber);
}
console.log(`Yor random number: ${getRandomNum()}`)





