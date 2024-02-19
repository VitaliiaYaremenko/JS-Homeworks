const userData = {
  name: 'Alex',
  age: 30,
};

const printName = function (prefix) {
  console.log(`${prefix} ${this.name}`);
};

const myApply = function (func, context, argsArray) {
  context.printName = func;
  context.printName(argsArray);
  delete context.printName;
};

myApply(printName, userData, 'Mr');
