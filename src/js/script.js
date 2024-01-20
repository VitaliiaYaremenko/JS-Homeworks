'use strict';

const age = +prompt('Напишіть скільки вам років: ');

const showUserAge = function () {

    if (typeof age !== 'number' || Number.isNaN(age) || age === 0) throw new Error('Невірно вказане значення');

    const years = [1, 21, 31, 41, 51, 61, 71, 81, 91, 101];
      for (let i = 0; i < years.length; i++) {
      if (years[i] === age) return  `Тобі ${age} - рік!`;
  }
    if (age %10 ===2 && age !==12 || age %10 ===3 && age !==9 && age !==13 || age %10 ===4 && age !==14 ) return `Тобі ${age} - роки`;
     return `Тобі ${age} - років`;
}
alert(showUserAge());