function values(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

function add(a = 0, b = 0, c = 0) {
  return a + b + c;
}

function addRestParams(...theArgs) {
  let argSum = theArgs.reduce((acc, value) => acc + value, 0);
  return argSum;
}

function addReturn(a, b) {
  return console.log('Success'), a+b;
}

function counter() {
  let number = 1;
  return function() {console.log(number++);}
}

let Dog = function () {
  let name;
}

let speak = function(what) {
  console.log(what);
  return;
}

values(1, 2);
console.log(add(1,2));
console.log(`addRestParams: ${addRestParams(1,2,3,4)}`);

console.log(addReturn(2, 2));


console.log('======================');
const steps = counter();
steps();
steps();
steps();

console.log([1, 2, 3, 4].reduce((acc, value) => acc + value));

let myDog = new Dog;
Dog.prototype.speak = speak;
myDog.name = "Puppy";
console.log(myDog);
myDog.speak("Phaf-phaf");

function myObject() {
  let myValue = 1; 
  return {
    display: () => console.log(myValue),
    increment: () => myValue++
  };
}

let mything = myObject();
mything.display();
mything.increment();
mything.display();

function countUp(num, max) {
  if(num > max) return;
  console.log(num);
  countUp(num + 1, max);
}

countUp(1, 8);
