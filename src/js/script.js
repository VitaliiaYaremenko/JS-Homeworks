'use strict';

const userName = prompt('Hi! What is your name?');
const userFirstNumber = +prompt(`${userName}! Write the first number: `);
const userSecondNumber = +prompt(`Write the second number: `);

const userOperation = prompt(`${userName} Select an option : 'add', 'sub', 'mult', 'div'`);

if (userOperation === 'add') {
    alert(`${userFirstNumber} + ${userSecondNumber} = ${userFirstNumber + userSecondNumber }`)
} else if (userOperation === 'sub') {
    alert (`${userFirstNumber} - ${userSecondNumber} = ${userFirstNumber - userSecondNumber }`)
} else if (userOperation === 'mult') {
    alert(`${userFirstNumber} * ${userSecondNumber} = ${userFirstNumber * userSecondNumber }`)
} else if (userOperation === 'div') {
    alert(`${userFirstNumber} / ${userSecondNumber} = ${userFirstNumber / userSecondNumber }`)
}