const add = (x, y) => x + y;
const substract = (x, y) => x - y;

const combine2and3 = func => func(2, 3);

console.log(combine2and3(add));
console.log(combine2and3(substract));


console.log(combine2and3((x, y) => x + y));