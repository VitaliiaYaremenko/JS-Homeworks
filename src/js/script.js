const arr = [0, 1, 2, 3, 4];
const reduce = function (array, callback, initValue) {
  let accum = (!initValue) ? array[0] : initValue;

  for (let i = 0; i < array.length; i += 1) {
    if (callback(accum, array[i], i, array)) {
      accum = callback(accum, array[i], i, array);
    }
  }
  return accum;
};

const result = reduce(arr, (sum, current) => sum + current, 10);
console.log(result);
