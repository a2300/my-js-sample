function printName(obj: { first: string; last?: string }) {
  // ...
  console.log("The first name is " + obj.first);
  console.log("The last  name is " + (obj.last === undefined ? "Unknown" : obj.last));  
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });