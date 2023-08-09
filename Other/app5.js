function sayHi(greeting) {
  console.log(this.name + ' ' + greeting);
}

let user = {name: 'Adam'};
let admin = {name: 'Admin'};

sayHi.call(user, 'hi');
sayHi.call(admin, 'chau');