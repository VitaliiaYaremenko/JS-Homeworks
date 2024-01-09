'use strict';

const userName = prompt(`Hello! What is your name?`);
alert(`${userName} Glad to see you!`);

const userTime = prompt(`${userName} How much time do you have?`);
alert(' ' + userTime + ' Great, we can do everything!');

const userQuestion = prompt(`${userName} How can we help you?`);
alert(' ' + userQuestion + ' We are looking for a solution, please wait!');

console.log( userName  + ' ' + userTime  + ' ' +  userQuestion);



const  userNumber = prompt('Write your five number');
const transformNumber  = userNumber[0] + ' ' + userNumber[1] + ' ' + userNumber[2] + ' ' + userNumber[3] + ' ' + userNumber[4];
alert(transformNumber);
console.log(transformNumber);