function runningAverage() {
  var arr = [];
  return (x) => {
      arr.push(x);
      return arr.reduce((acc, val) => acc + val, 0)/arr.length;
  }
    
}

const rAvg = runningAverage();
console.log(rAvg(10)); //10
console.log(rAvg(11)); //10.5
console.log(rAvg(12)); //11


function sum(a, b) {

  let result = a;

  function f(x) {
    result += x;
    return f;
  }

  f.toString = function() {
    return result;
  };

  return b != undefined ? (a + b) : f;
}

alert(sum(2, 3));
alert(sum(2)(3));
alert(sum(1)(2)(3)(4));