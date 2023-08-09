class MyPromise extends Promise {
  synchThen(func) {
    func(); 
    return this;
  }  
}


let	promise	=	new	MyPromise((resolve)	=>	{
  console.log(1);
  resolve();
}).synchThen(()	=>	{
  console.log(2);
}).then(()	=>	{
  console.log(3);
})
console.log(4);
// Output: 1 2 4 3

