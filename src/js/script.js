'use strict';

const userName  = prompt('Вітаю! Як до вас звертатись?  ');

const userBirth = +prompt(`${userName} \n Вкажіть рік вашого народження:`);

const userCity = prompt(`Оберіть місто з переліку, або  введіть свою відповідь: \n 'Київ', 'Вашингтон' 'Лондон'?`);

const userSport = prompt(`${userName}, Який ваш улюблений вид спорту? \n'футбол', 'баскетбол', 'крикет' \nУкажіть ваш варіант: `);



const nowTime = new Date().getFullYear();

let age;
let country;
let player;


if (userBirth !== 0) {
    age = nowTime - userBirth;
} else if (userBirth === 0 || ' ') {
    age = 'Шкода що ви не ввели  рік народження :(';
}
// ________________________________________

if (userCity === 'Київ') {
    country = 'Ти живеш у столиці України';
} else if (userCity === 'Вашингтон') {
    country = 'Ти живеш у столиці Сполучених Штатів Америки';
} else if (userCity === 'Лондон' ) {
    country = 'Ти живеш у столиці Англії';
} else if (userCity) {
    country = (`Ти живеш у місті ${userCity}`);
} else if (userCity === null || ' ') {
    country = 'Шкода що ви не указали місто :(';
}


// ____________________________________
if (userSport === 'футбол' ) {
    player = 'Круто! Хочеш стати як Лионель Месси? ';
} else if (userSport === 'баскетбол' ) {
    player = 'Круто! Хочеш стати як Никола Йокич';
} else if (userSport === 'крикет' ) {
    player = 'Круто! Хочеш стати як Сачин Рамеш';
} else if (userSport)  {
    player = `${userSport}, чудовий вибір!`;
} else if (userSport === null || ' ' ) {
    player = 'Шкода що ви не указали улюблений спорт :(';
}

// ________________________________________

alert(`${userName} \nТвій вік: ${age} .\n${country} .\n${player}`);









