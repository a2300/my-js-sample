class User {
  subname = "Anonymous";
  
  constructor (name) {
    this.name = name;
  }

  get name() {
    return this.name;
  }

  set name(value) {
    if (value.length < 4) {
      console.error("Name is too shot");
      return;
    }
    this.name = value;
  }

  sayHi() {
    console.log(this.name);
  }

  saySubname() {
    console.log(`Hi, ${this.subname}`);
  }
}

let user = new User("Ivan");
user.sayHi();
user.saySubname();

let user2 = new User("");