class Waiter {
  async wait() {
    return await Promise.resolve(1);
  }

  async waitError() {
    return await Promise.reject("foo");
  }


}

new Waiter()
  .wait()
  .then(x => console.log(x));

new Waiter()
  .waitError()
  .catch(x => console.log(x));



