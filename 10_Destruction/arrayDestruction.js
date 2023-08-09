const arr = [1, 2, 3, 4, 5];

const myFunction = ([e1, e2, e3, e4, e5]) => {
  return `${e1} + ${e2} + ${e3} + ${e4} + ${e5}`;
}

const myFunction2 = (values) => {
  const [e1, e2, e3, e4, e5] = values;
  return `${e1} + ${e2} + ${e3} + ${e4} + ${e5}`;
}

let output = myFunction(arr);
console.log(output);

let output2 = myFunction2(arr);
console.log(output2);