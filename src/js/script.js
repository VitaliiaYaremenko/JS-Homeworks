const arrOn = [1, 2, 3, 1, 2, 3, 4, 2, 3, 4];

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

const myFlat = function (...arr) {
  if (arr.length !== 1) {
    throw new Error('throw new Error(\'Function accepts only 1 argument, too much arguments provided\');');
  }

  if (!Array.isArray(arr)) {
    throw new Error('You did not pass an array!');
  }
};

const flattenedArray = [];

const flattener = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    if (Array.isArray(array[i])) {
      flattener(array[i]);
    } else {
      flattenedArray.push(array[i]);
    }
    return flattenedArray;
  }
  return flattener(arr);
};

console.log(myFlat(complexArray));
