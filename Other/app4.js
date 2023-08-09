//function decorator
function slow(x) {
  //Here is slow computations
  let delay = 1000;
  let start = new Date().getTime();
  while (new Date().getTime() < start + delay);

  console.log(`Called with ${x}`);
  return 100;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if(cache.has(x)) {
      return cache.get(x);
    }

    let result = func(x);

    cache.set(x, result);
    return result;
  }
}

let slw = cachingDecorator(slow);
console.log(slw(1)); //caching
console.log(slw(1)); //from cache
