async function f() {
  return 1;
}

f().then(x => console.log(x));

async function g() {
  return Promise.resolve(2);
}


g().then(x => console.log(x));

async function h() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ready!"), 1000)
  });

  let result = await promise; // будет ждать, пока промис не выполнится (*)

  console.log(result); // "готово!"  
}

h();


