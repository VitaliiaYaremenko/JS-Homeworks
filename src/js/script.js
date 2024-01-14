'use strict';

function padString (string, length, symbol = '*', sideRight = true) {

  if (typeof string !== 'string') throw new Error('Passed value is not a string');
  if (typeof length !== 'number' && length !== Number.isNaN(length)) throw new Error(`The transferred value is not a number`);

  if (string.length === length) return string;
  if (string.length > length) return string.slice(0, length);

  if (typeof symbol !== 'string' || symbol.length !== 1) throw new Error(`Symbol must contain only one element`);
  if (typeof sideRight !== 'boolean') throw new Error(`The passed value is not a booleans data type`);


    const symbols = symbol.repeat(length - string.length);
    return sideRight ? string + symbols : symbols + string;
}

console.log(padString('Hello',8))
console.log(padString('Hello', 6, '*', false));
console.log(padString('Hello', 2,'*'));