'use strict';

const showUserAge = function () {
    const getUserAge = +prompt('Напишіть скільки вам років: ');

    if (typeof getUserAge !== 'number' || Number.isNaN(getUserAge) || getUserAge === 0) throw new Error('Невірно вказане значення');

       if (getUserAge % 10 === 1 && getUserAge % 100 !== 11 ) {
            return `Тобі ${getUserAge} - рік`;
        } else if (getUserAge % 10 >= 2 && getUserAge % 10 <= 4 && getUserAge % 100 !== 12 && getUserAge % 100 !== 13 && getUserAge % 100 !== 14){
            return `Тобі ${getUserAge} - роки`;
        } else {
           return   `Тобі ${getUserAge} - років`;
       }

}
alert(showUserAge());