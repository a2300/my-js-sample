'use strict';

let guess = 28;

// console.log(guess++);
// console.log(++guess);
// console.log(guess);

console.log(guess);
guess += 1;
guess += 1;
console.log(guess);
console.log(guess);


// деструктурирующее присваивание
// записывает firstName = arr[0]
// и lastName = arr[1]
let arr = ['Peter', 'Bennison'];
let [firstName, lastName] = arr;

console.log(firstName);
console.log(lastName);

let [name1, name2, ...otherNames] = ["Hello", "World", "Boo", "Foo"];
console.log(name1);
console.log(name2);
console.log(otherNames);

let options = {
  title: "Menu",
  width: 100,
  height: 200
};

let {title, width, height} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200