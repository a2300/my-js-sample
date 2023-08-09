const createPrinter = () => () => console.log("Hello world");

const createPrinter2 = function() {
  return function() {
    console.log("Hello World2");
  }
}

let myfunction = createPrinter();

console.log("Now we call the function");
myfunction();


let myfunction2 = createPrinter2();
console.log("Now we call the 2nd function");

myfunction2();

const createMultiplier = y => x => x * y;

const doubleFunctional = createMultiplier(2);
const trippleFunctional = createMultiplier(3);

console.log(doubleFunctional(3));