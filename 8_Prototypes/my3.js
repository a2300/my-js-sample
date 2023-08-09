let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// Object.keys возвращает только собственные ключи
console.log(Object.keys(rabbit)); // jumps

// for..in проходит и по своим, и по унаследованным ключам
for(let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  if(isOwn) {
    console.log(`Our: ${prop}`);
  }else {
    console.log(`Inherited: ${prop}`);
  }
}

let obj = {};
console.log(obj);
console.log(obj.__proto__ === Object.prototype);