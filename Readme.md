**Hoisting**

* Нижче наведено кілька прикладів коду. 
* Проаналізуйте і поясніть, що відбувається в кожному випадку, та який результат буде виведено в консоль.

_Приклад 1:_

console.log(a);
var a = 10; 

_Приклад 2:_

myFunction();

function myFunction() {
console.log('Hello, world!');
} 

_Приклад 3:_

console.log(b);
let b = 5; 

_Приклад 4:_

const myArrowFunction = () => {
console.log('Hello from arrow function');
}

myArrowFunction(); 

**Написання Коду:**
Напишіть власні приклади коду, де:

* В одному випадку hoisting призводить до успішного виконання коду.
* В іншому випадку hoisting призводить до помилки. Поясніть, чому сталася помилка.
