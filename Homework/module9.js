class CustomValidationError extends Error {
  constructor (message) {
    super(message);
    this.name = "CustomValidationError";
  }
}


let json = '{"name":"John", "age": 0}';
let user = JSON.parse(json);

if(!user.age || user.age <=0) {
  throw new CustomValidationError("Incorrect age value " + user.age + ". Age must exists and be more 0");
}

/*
1. Checked epam.com, time.epam.com, telescope.epam.com with Chrome Dev Tools. No memory leaks are found
2. What	functions	are	taking	more	time	for	execution
   - time.epam.com
   f.onreadystatechange
   Functionf.onreadystatechange @ xhr.js:34:34

   - epam.com
   fireWith
   FunctionfireWith @ jquery.min.8e23e5a….js:816:20

   - telecope.epam.com
   E
   FunctionE @ gtm.js?id=GTM-TPWW34:51:456

   3. 
*/

