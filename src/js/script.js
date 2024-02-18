const myFlat = function (arr) {
  if (arguments.length > 1 || !Array.isArray(arr)) {
    throw new Error('throw new Error(\'Function accepts only 1 argument, too much arguments provided\');');
  }

  const flatten = function (inputArray) {
    let flatArray = [];

    for (const item of inputArray) {
      if (Array.isArray(item)) {
        flatArray = flatArray.concat(flatten(item));
      } else {
        flatArray.push(item);
      }
    }
    return flatArray;
  };
  return flatten(arr.slice());
};

const arrOn = [1, 2, 3, 1, 2, 3, 4, 2, 3, 4];

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

const flattenArray = myFlat(complexArray);
const resultArray = myFlat(arrOn);
console.log(flattenArray);
console.log(resultArray);
