'use strict';

const x = +prompt('Write first number: ');
const y = +prompt('Write second numder: ');

alert(x > y ? 'X більше за Y' : 'X не більше, ніж Y ');
// ________________________________________

const userNumber = +prompt('Enter an integer: ');
const numberLength = userNumber.toString();

let numberInfo;

if (userNumber > 0) {
    numberInfo = `${userNumber} - Your number is definitely a positive number!`;
} else if (userNumber < 0){
    numberInfo = `${userNumber} - Your number is negative!`;
}else if (userNumber === 0) {
    numberInfo = `Your number is zero!`
}
alert(`Figures in number: ${numberLength.length} \n${numberInfo}`);
// ________________________________________

const firstNumber = +prompt('Write your first number: ');
const secondNumber =+prompt('Write your second number: ');
const thirdNumber = +prompt('Write your third number: ');

let maxNumber = firstNumber;

if (secondNumber > firstNumber){
    maxNumber = secondNumber
    if (thirdNumber > maxNumber) {
        maxNumber = thirdNumber;
    }
}
alert(`The largest number: ${maxNumber}`);
// ________________________________________

const side1 = +prompt('Enter the first side of the triangle: ');
const side2 = +prompt('Write another side: ');
const side3 = +prompt('Write the last side: ');

if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
    alert('That\'s right');
} else {
    alert('Error!')
}




