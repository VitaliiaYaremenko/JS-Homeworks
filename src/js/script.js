'use strict';

const userNumber = +prompt('Write your number : ');
const degree = +prompt('Write the degree for your number: ');

function calcDegreeConversion (userNumber, degree = 1) {

    if (typeof userNumber !== 'number' && userNumber !== Number.isNaN(userNumber)) return Error ;
    if (typeof degree !== 'number' && degree !== Number.isNaN(degree)) return Error ;

    return userNumber**degree;
}
const result = calcDegreeConversion(userNumber, degree);
alert(`Number in degree: ${result}`);

