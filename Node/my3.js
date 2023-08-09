function square(num, callback) {
  if (typeof callback !== 'function') {
    throw new TypeError(`Callback must be a function. Got: ${typeof callback}`);
  }

  // simulate async operation
  setTimeout(() => {
    if (typeof num !== 'number') {
      // if an error occurs, it is passed as the first argument to the callback
      callback(new TypeError(`Expected number but got: ${typeof num}`));
      return;
    }

    const result = num * num;
    // callback is invoked after the operation completes with the result
    callback(null, result);
  }, 100);
}

/* square('8', (err, result) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(result);
}); */

square(8, (err, result) => {
  if (err) {
    console.error(err)
    return
  }

  console.log(result);
});