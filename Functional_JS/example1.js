const add = (x, y) => x + y;
const double = number => number * 2;
const sayHello = () => console.log("Say Hello");
const sayHello2 = sayHello;

const getPersonData = () => ({
  name: "John",
  age: 34,
});

console.log(add(1,2));
sayHello();
sayHello2();
console.log(getPersonData());