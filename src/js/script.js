'use strict';

const userAge = +prompt('Напишіть скільки вам років: ');

if (typeof userAge !== 'number' && userAge !== Number.isNaN(userAge)) alert (`Ви ввели не число! `);

const year1 = [1, 21, 31, 41, 51, 61, 71, 81, 91, 101, 121];
  for (let i = 0; i < year1.length; i++) {
      if (year1[i] === userAge) alert(`Тобі ${userAge} - рік!`);
  }
    alert(`Тобі ${userAge} - років`);

