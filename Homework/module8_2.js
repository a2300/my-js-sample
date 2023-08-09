class ReversePromise {
  constructor(executor) {
    this.queue = [];
    executor(this.resolve.bind(this));
  }

  resolve(value) {
    const handleCallbacks = i => {
      if (i === -1) return;
      const callback = this.queue[i];
      handleCallbacks(i - 1);
      callback(value);
    };
    setTimeout(() => handleCallbacks(this.queue.length - 1), 100);
  }

  then(callback) {
    this.queue.unshift(callback);
    return this;
  }
}

let	reversePromise	=	new	ReversePromise((resolve)	=>	{
  console.log(1);
  resolve();
})
.then(()	=>	console.log(2))
.then(()	=>	console.log(3))
.then(()	=>	console.log(4))

/* 
Output:
1
4
3
2 
*/