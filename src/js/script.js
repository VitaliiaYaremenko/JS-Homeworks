const runCallbacks = function (callbacks, value) {
  let result = value;

  for (let i = 0; i < callbacks.length; i += 1) {
    result = callbacks[i](result);
  }
  return result;
};

const addFirst = (x) => x + 1;
const square = (x) => x * x;

const callbacks = [addFirst, square, addFirst];

const firstResult = runCallbacks(callbacks, 1);
console.log(firstResult);
// ____________________________________________________

const composeFunctions = function (...functions) {
  return function (value) {
    return functions.reduceRight((currentValue, currentFunc) => currentFunc(currentValue), value);
  };
};

const addOne = function (x) {
  return x + 1;
};

const secondSquare = function (x) {
  return x * x;
};

const multiplyByTwo = function (x) {
  return x * 2;
};

const composedFunction = composeFunctions(addOne, secondSquare, multiplyByTwo);

const result = composedFunction(3);
console.log(result);
