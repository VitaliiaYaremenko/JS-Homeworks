const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 5);
console.log(result);

// _______________________________________
const numbers = [1, 12, 4, 8, 10, 11];

const pairedResult = numbers.filter((num) => num % 2 === 0);
const sumResult = pairedResult.reduce((sum, number) => sum + number, 0);

console.log(pairedResult);
console.log(sumResult);

// _______________________________________

const arrayNum = [2, 14, 6, 8, 12];
const sum = arrayNum.reduce((acc, number) => number + acc, 0);
const average = Math.round(sum / arrayNum.length);

console.log(sum);
console.log(average);
