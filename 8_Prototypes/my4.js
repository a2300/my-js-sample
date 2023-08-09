let animal = {
  eat: true
}

let rabbit = Object.create(animal, {
  jumps: {
    value: true
  }
});

console.log(rabbit.eat);
console.log(rabbit.jumps);

console.log(Object.getPrototypeOf(rabbit) === animal);

Object.setPrototypeOf(rabbit, {});
console.log(rabbit.eat);
