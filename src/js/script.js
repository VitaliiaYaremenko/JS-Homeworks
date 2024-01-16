'use strict';

const userNumber = +prompt('Write your number: ');
let divider = 0;

if (typeof userNumber !== 'number') throw new Error(`you entered the wrong number`);
if (userNumber <= 1) console.log(NaN);

    for (let i = 2; i <= userNumber; i++) {

        if (userNumber % i === 0) {
            divider = i;
            console.log('Дільник', i);
            break;
        }
    }