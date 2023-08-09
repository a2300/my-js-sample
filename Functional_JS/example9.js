const numbers = [1, 2 , 3 , 4, 5, 6, 7, 8];

const double = x => x * 2;
let newNumebers = numbers.map(double);
console.log(newNumebers);

const isEven = x => (x % 2 === 0);
let evenNumebers = numbers.filter(isEven); 
console.log(evenNumebers);


const words = [
  'The',
  'Blur',
  'Antartica',
  'goodbye'
];

const createLengthTest = minLength => 
  word => word.length > minLength;


const longWords = words.filter(createLengthTest(5));

console.log(longWords);


