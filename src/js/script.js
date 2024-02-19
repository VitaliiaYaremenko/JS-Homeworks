const sumNumber = (a, b) => {
  if (typeof a !== 'number' || Number.isNaN(a) || typeof b !== 'number' || Number.isNaN(b)) {
    throw new Error('The value transmitted is not a digit!');
  }
  return a + b;
};
console.log(sumNumber(7, 7));

// _______________________________________________

const stringLength = (str) => {
  if (typeof str !== 'string') throw new Error('You entered the wrong line!');
  return str.length;
};

console.log(stringLength('JavaScript'));

// _______________________________________________

const numbers = [1, 2, 3, 4, 5];
const newArray = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) throw new Error('The array does not meet the requirements!');

  const result = [];

  for (let i = 0; i < arr.length; i += 1) {
    result.push(arr[i] + 1);
  }
  return result;
};

console.log(newArray(numbers));

const arrNum = numbers.map((item) => item + 1);
console.log(arrNum);
