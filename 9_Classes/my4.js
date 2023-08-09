class Animal {
  name = 'animal';

  constructor() {
    alert.log(this.name); // (*)
  }
}

class Rabbit extends Animal {
  name = 'rabbit';
}

if(!global.alert) {
  alert = console;
}
new Animal(); // animal
new Rabbit(); // animal