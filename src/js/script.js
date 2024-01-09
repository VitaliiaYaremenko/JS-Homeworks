'use strict';

const student = {
    name: 'Nina',
    age: 19,
    grade: 5,
};
student.grade = 24;
student.course = 'English';
console.log(student);

// _________________________________
const book = {
    title: 'Holly',
    author: 'Stephen King',
    year: 2023,
    publisher: {
        name: 'Scribner',
        location: 'New York',
    }
};
console.log(book);
// _________________________________

const movie = {
    title: 'Civil War',
    director: 'Alex Garland',
    year: 2024,
    genre: 'Drama',
};
console.log(movie);
for (let key in movie) {
    console.log(`${key} : ${movie[key]}`);
}
// _________________________________

const person1 = {
    id: Symbol('id'),
    name: 'Richard',
    location: 'London',
    age: 25,
    pet: 'no'
};

const person2 = {
    id: Symbol('id'),
    name: 'Richard',
    location: 'London',
    age: 25,
    pet: 'no'
};
console.log(person1, person2);
console.log(person1.id === person2.id);

console.log(
    JSON.stringify(person1) === JSON.stringify(person2)
);
// _________________________________

const animals = ['type', 'name'];
const total = animals.push('quantity');
console.log(animals);
console.log(total);
