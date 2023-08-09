function convertArrayToObject(arr) {
  return arr.reduce((acc, curr) =>{
    acc[curr[0]] = curr[1];
    return acc;
  }, {});
}

const obj = convertArrayToObject([
  [1, "One"],
  [2, "Two"],
  [3, "Three"]
]);

console.log(obj);

/**
 * C:\dev\My2\my-js\Node_OS>node --inspect-brk my2.js
 * 
 * go to chrome://inspect
 */