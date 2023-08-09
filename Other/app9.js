let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal; // (*)

// теперь мы можем найти оба свойства в rabbit:
console.log( rabbit.eats ); // true (**)
console.log( rabbit.jumps ); // true