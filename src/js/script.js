'use strict';

const firstNumber = +prompt('Введіть перше число: ');

const secondNumber= +prompt('Введіть друге число: ');

const plus = firstNumber + secondNumber;
const minus = firstNumber - secondNumber;
const share = firstNumber / secondNumber;
const multiply = firstNumber * secondNumber;


if (firstNumber && secondNumber !== null) {
    alert('plus = ' + plus + '\nminus = ' + minus + '\nshare = ' + share + '\nmultiply = ' + multiply);
} else {
    alert('Невірно вказане значення, пробуйте ще раз :)')
}