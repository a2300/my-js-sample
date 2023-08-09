const double = x => x * 2;
const substractOne = x => x - 1;
const tripple = x => x * 3;

const functionsArray = [
  double,
  substractOne,
  tripple
];

let number = 2;

functionsArray.forEach(func => number = func(number));

console.log(number);