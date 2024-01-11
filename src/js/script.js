'use strict';

let number = '';

for (let i = 20; i <= 30; i = i+0.5) {
    number += i + ' ';
}
console.log(number);
// ___________________________________________

let dollar = 27;

for (let i = 10; i <= 100; i = i+10) {
    console.log(`${dollar * i}`);
}
// ___________________________________________

const integer = +prompt('Write an integer: ');

for (let i = 1; i <= 100; i++) {

    if (i % 2 === 0 && i**2 < integer) {
        console.log(i);
    }
}
// ___________________________________________

const n = +prompt('Write your number: ');
let numberInfo = true;

for (let i = 2; i < n; i++){
    if( n % i === 0)  {
        numberInfo = false;
        alert(`${numberInfo} - It's a complicated number!`);
        break;
    }else {
        alert(`${numberInfo} - It's a prime number!`)
    }
}
// ___________________________________________
let x = +prompt('Write some number: ');

while (x % 3 === 0 ) {
    x /= 3;
}
alert( x === 1 ? `True - can be obtained! ` : `False - can't get!`);


