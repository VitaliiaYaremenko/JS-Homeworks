'use strict';

let numOperations = '';

for (let i = 10; i <= 20; i++ ) {
    numOperations += `${i}, `;
}
alert(numOperations);
// __________________________________

let numberSquare = 0;

for (let i = 10; i <= 20; i++) {
    numberSquare = i ** 2;
    console.log(numberSquare);
}
// __________________________________

let multiply = 0;

for (let i = 1; i <= 10; i++ ) {
    multiply = i * 7;
    console.log(`7 * ${i} = ${7*i}`);
}
// __________________________________

let sum = 0;

for (let i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log(sum);
// __________________________________
let product = 1;

for (let i = 15; i <= 35; i++) {
    if (i % 2 === 0) {
        product = product * i;
    }
}
console.log(product);
// __________________________________

let even  = 0;
let sumEven = 0;

for (let i = 1; i <= 500; i++ ) {
    if (i % 2 === 0) {
        even  += 1;
        sumEven += i;
    }
}
console.log(`Average value: ${sumEven / even} `);
console.log(sumEven);
console.log(even);

// __________________________________
let paired = 0;

for (let i = 30; i <= 80; i++) {
    if ( i % 2 === 0) {
        paired += i;
    }
}
alert(paired);
// __________________________________
let multiple = 1;

for (let i = 100; i <= 200; i++) {
    if ( i % 3 === 0) {
        multiple = i;
        console.log(multiple);
    }
}
// __________________________________
const naturalNumber = +prompt('Write your number: ');

let dividers = '';
let evenDivider =0;
let sumDivider = 0;

for (let i = 1; i <= naturalNumber; i++) {
    if (naturalNumber % i === 0 ) {
        dividers += `${i}, `;
        if (naturalNumber % i === 0 && i % 2 === 0) {
            evenDivider += 1;
            sumDivider += i;
        }
    }
}
alert(`Dividers: ${dividers} \nEven divider:  ${evenDivider} \nSum divider: ${sumDivider} `);
// __________________________________

for (let x = 1; x <= 10; x++) {
    for (let y = 1; y <= 10; y++) {
        console.log(`${x} * ${y} = ${x * y} \n`);
    }
    console.log(`\n`)
}




