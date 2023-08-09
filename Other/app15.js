let promiseOk = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
});

// resolve запустит первую функцию, переданную в .then
promiseOk.then(
  result => console.log(result), // выведет "done!" через одну секунду
  error => console.log(error) // не будет запущена
);


let promiseBad = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject запустит вторую функцию, переданную в .then
promiseBad.then(
  result => console.log(result), // не будет запущена
  error => console.log(error) // выведет "Error: Whoops!" спустя одну секунду
);