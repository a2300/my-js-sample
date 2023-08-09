interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;
  
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

function wrapInArray(obj: string | string[]): string[] {
  if(typeof obj === "string") {
    return [obj];
  }
  return obj;
}

const user1: User = new UserAccount("Murphy", 1);

let value = wrapInArray("Hello world");
console.log(value);