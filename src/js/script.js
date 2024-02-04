const years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];

const indexOf = function (array, item) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === item) return i;
  }
  return -1;
};
console.log(indexOf(years, 2000));

// ______________________________________________________

const lastIndexOf = function (array, item) {
  for (let i = array.length; i >= 0; i -= 1) {
    if (array[i] === item) return i;
  }
  return -1;
};

console.log(lastIndexOf(years, 1980));
// ______________________________________________________

const includes = function (array, item) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === item) return true;
  }
  return false;
};
console.log(includes(years, 198));
// ______________________________________________________

const find = function (array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
};

const result = find(years, (item) => item > 2000);
console.log(result);
// ______________________________________________________

const findIndex = function (array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) return i;
  }
  return -1;
};

const resultFindIndex = findIndex(years, (item) => item < 1950);
console.log(resultFindIndex);
// ______________________________________________________

const every = function (array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) return true;
  }
  return false;
};

const resultEvery = every(years, (item) => item < 1900);
console.log(resultEvery);
// ______________________________________________________

const some = function (array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) return true;
  }
  return false;
};
const resultSome = some(years, (item) => item % 2 === 0);
console.log(resultSome);
