const getFactorial = function (n) {
  return (n !== 1) ? n * getFactorial(n - 1) : 1;
};

const result = getFactorial(3);
console.log(result);

// _____________________________________________

const pow = function (num, degree) {
  if (degree === 1) return num;
  return num * pow(num, degree - 1);
};
console.log(pow(2, 3));
console.log(pow(2, 2));
console.log(pow(4, 2));

const quadruple = function (x, n) {
  let powNumber = 1;

  for (let i = 1; i < n; i += 1) {
    powNumber *= x;
  }
  return powNumber;
};

console.log(quadruple(3, 3));
// _____________________________________________

const sum = function (a, b) {
  if (b === 0) return 1;
  return a + sum(1, b - 1);
};

console.log(sum(6, 2));
