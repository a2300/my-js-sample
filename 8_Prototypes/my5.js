// Prototype inheritance

function Item() {};
Item.prototype.type = 'floral';
Item.prototype.logItem = function() {
  for(let prop in this) {
    console.log(' ', prop, ': ', this[prop])    
  }
};

function Live(name, pot, quantity = 1) {
  this.name = name;
  this.pot = pot;
  this.quantity = quantity;
}
Live.prototype = new Item();
Live.prototype.storage = 'warm';


function Cut() {};
Cut.prototype = new Item();
Cut.prototype.storage = 'cool';

function Arrangement(name, vase, quantity = 1) {
  this.name = name;
  this.vase = vase;
  this.quantity = quantity;
}
Arrangement.prototype = new Cut();


const roses = new Live('Fresh roses', 'green', 10);
console.log(roses);
console.log(`has type of ${roses.type}. Should be stored in ${roses.storage}`);
roses.logItem();


console.log("===========================");
const arrangement = new Arrangement("Birthday buket", "yellow", 3);
arrangement.logItem();