'use strict';

const arr = [1, 2, 3, -1, -2, -3];

const positiveNumber = function (arr) {
    const exampleArr = [];

    if (Array.isArray(arr) && arr.length === 0) return 'Пустий обєкт';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 ) break;
        exampleArr.push(arr[i]);
    }
    if (Array.isArray(exampleArr) && exampleArr.length === 0) return null;
    return exampleArr;
}
console.log(positiveNumber(arr));
console.log(arr);


