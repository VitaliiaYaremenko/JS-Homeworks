const greet = function () {
  return `Hello! Welcome ${this.name}!`;
};

const userAge = function () {
  return `Your age ${this.name} - ${this.age}!`;
};

const createUser = function (name, age) {
  const user = {
    name,
    age,
  };
  user.greet = greet;
  user.userAge = userAge;
  return user;
};

const firstUser = createUser('Anna', 19);
alert(`${firstUser.greet()}\n${firstUser.userAge()}`);

const secondUser = createUser('Sem', 25);
alert(`${secondUser.greet()}\n${secondUser.userAge()}`);

const thirdUser = createUser('Nik', 50);
alert(`${thirdUser.greet()}\n${thirdUser.userAge()}`);
