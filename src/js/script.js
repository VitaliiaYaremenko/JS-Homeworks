'use strict';

const array = [];
const getNumberRm = function () {

    let randomNumber = Math.floor(Math.random() * 100) + 1;

    if (!array.includes(randomNumber)) {
        array.push(randomNumber);
        return randomNumber;
    }
    while (array.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 100) + 1;
    }
    array.push(randomNumber);
    return randomNumber;
}
for (let i = 0; i < 100; i++) {
    console.log(getNumberRm());
}





