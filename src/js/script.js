const userData = {
  name: 'Alex',
  age: 30,
};

const printName = function (prefix) {
  console.log(this);
  console.log(`${prefix} ${this.name}`);
};

const myApply = function (func, context, argsArray) {
  context.printName = func;
  context.printName(argsArray, ...argsArray);
  delete context.printName;
};

const myBind = function (func, context, argsArray) {
  return function () {
    myApply(func, context, argsArray);
  };
};

const result = myBind(printName, userData, ['Mr']);
console.log(result);
result();
