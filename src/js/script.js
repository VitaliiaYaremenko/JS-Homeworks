'use strict';

const userNumber = +prompt('Write your number : ');
const degree = +prompt('Write the degree for your number: ');

function calcDegreeConversion (userNumber, degree = 1) {
    if (isNaN(userNumber) && isNaN(degree)) {
        return Error ;
    } else {
        return userNumber**degree;
        // Math.pow(userNumber, degree);
    }
}
const result = calcDegreeConversion(userNumber, degree);
alert(`Number in degree: ${result}`);

