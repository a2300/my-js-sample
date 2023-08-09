async function f() {
  return 1;
}

f().then(console.log); // 1

async function g() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(()=> resolve("Ready!"), 2000);
  })

  let result = await promise;

  console.log(result);
}

g();