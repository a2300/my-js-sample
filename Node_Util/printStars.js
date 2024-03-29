const print = (stars, header) => {
  console.log('*'.repeat(stars));
  console.log(header);
  console.log('*'.repeat(stars));
};

if (require.main == module) {
  // Running as a script
  print(process.argv[2], process.argv[3]);
} else {
  // Being required
  module.exports = print;
}
/*
C:\dev\My2\my-js\Node_Util>node printStars.js 5 Foo 
*****
Foo
*****
*/
