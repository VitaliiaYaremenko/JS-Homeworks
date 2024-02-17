const myApply = function (func, context, argsArray) {
  const result = func(...argsArray);

  context = context || window;

  return result;
};

const userData = {
  name: 'Alex',
};

const salutation = function (greeting) {
  return console.log(`${greeting} ${this.name}`);
};
myApply(salutation, userData, ['Hello !']);
