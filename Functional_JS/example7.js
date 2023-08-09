const divideNonFunctional = (x, y) => {
  if(y ===0) {
    console.log("Error: divide in zero");
    return null;
  }
  return x / y;
};


const divide = (x, y) =>  x / y;

const secondArgIsntZero = func =>
  (...args) => {
    if(args[1] ===0) {
      console.log("Error: divide in zero");
      return null;
    }

    return func(...args);
  
  }

const divideSafe = secondArgIsntZero(divide);

console.log(divideSafe(7, 0));
console.log(divideSafe(7, 2));