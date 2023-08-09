let user = {
  _name: "John",
  _surname: "Smith",

  get name() {
    return this._name;
  },

  set name(value) {
    if(value.length < 4) {
      console.log("Name is too shot");
      return;
    }
    this._name = value;
  },

  get surname() {
    return this._surname;
  },


  get fullName() {
    return `${this._name} ${this._surname}`;
  },

  set fullName(value) {
    [this._name, this._surname] = value.split(" ");
  }
}

user.fullName = "Alice Cooper";
console.log(user.name);
console.log(user.surname);

user.name = "Pit";