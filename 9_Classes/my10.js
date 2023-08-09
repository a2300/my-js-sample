'use strict';

const loggedInUser = 'sashavodnik';
const taxRate = 0.075;

class Cart {
  constructor(options) {
    this.user = options.user;
  }
  calcTax(rate) {
    this.tax = this.total * rate;
    return this;
  }
  calcShipping() {
    if (this.total > 50) {
      this.shipping = 5;
    } else {
      this.shipping = 10;
    }
    return this;
  }
  calcGrandTotal() {
    if (this.tax && this.shipping) {
      this.grandTotal = this.total + this.tax + this.shipping;
    }
    return this;
  }
}

const currentCart = new Cart({
  user: loggedInUser,
});

currentCart.total = 100;
// currentCart.calcTax(taxRate);
// currentCart.calcShipping();
// currentCart.calcGrandTotal();
currentCart
  .calcTax(taxRate)
  .calcShipping()
  .calcGrandTotal();
console.log(currentCart);