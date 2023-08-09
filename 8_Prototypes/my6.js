// Class inheritance
class Item {
  constructor() {
    this.type = 'goods';
  }
  logItem() {
    for(let prop in this) {
      console.log(' ', prop, ': ', this[prop]);   
    }
  }
}


class Live extends Item {
  constructor(name, pot, quantity = 1) {
    super();
    this.name = name;
    this.pot = pot;
    this.quantity = quantity;
    this.storage = 'warm';
  }
}

class Cut extends Item {
  constructor(name, vase) {
    super();
    this.name = name;
    this.vase = vase;
    this.storage = 'cool';
  }
}

class Arrangement extends Cut {
  constructor(name, vase, quantity = 1) {
    super(name, vase);
    this.quantity = quantity;
  }
}

const roses = new Live('Fresh roses', 'green', 10);
console.log(roses);
console.log(`has type of ${roses.type}. Should be stored in ${roses.storage}`);
roses.logItem();


console.log("===========================");
const arrangement = new Arrangement("Birthday buket", "yellow", 3);
arrangement.logItem();

