let animal = {
  eat: true,
  walk() {
    console.log("Animal walk");
  }
  
};

let rabbit = {
  jumps: true,
  __proto__: animal
}


rabbit.walk = function() {
  console.log("Rabbit bounce bounce");
}

console.log(rabbit.eat);
console.log(rabbit.jumps);
console.log(rabbit.walk());

