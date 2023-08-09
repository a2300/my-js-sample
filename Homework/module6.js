'use strict'

class Vector {
  constructor(values) {
    this.values = values;
  }

  add(other) {
    this.validate(other);
    
    let temp = []
    for(let i = 0; i < this.values.length; i++) {
       temp.push(this.values[i] + other.values[i]);
    }
    return new Vector(temp);
  }

  substract(other) {
    this.validate(other);

    let temp = []
    for(let i = 0; i < this.values.length; i++) {
       temp.push(this.values[i] - other.values[i]);
    }
    return new Vector(temp);
  }

  dot(other) {
    this.validate(other);

    let temp = 0;
    for(let i = 0; i < this.values.length; i++) {
      temp += this.values[i] * other.values[i];
   }
   return temp;      
  }

  norm() {
    let temp = 0;
    for(let i = 0; i < this.values.length; i++) {
      temp += Math.pow(this.values[i], 2);
    }
    return Math.pow(temp, 0.5);    
  }

  toString() {
    return '(' + this.values + ')';
  }

  equals(obj) {
    if(typeof obj != typeof this)
      return false;
    
    return (  
      Array.isArray(this.values) &&
      Array.isArray(obj.values) &&
      this.values.length === obj.values.length &&
      this.values.every((val, index) => val === obj.values[index]));

  }

  validate(other) {
    if(!(other instanceof Vector)) {
      throw new Error("other instance is not Vector");
    }
    
    if(this.values.length != other.values.length) {
      throw new Error("Parameter length is different");
    }
  }
}


const a = new Vector([1, 2, 3]);
const	b	=	new	Vector([3,	4,	5]);
const	c	=	new	Vector([5,	6,	7,	8]);

const addition = a.add(b);
console.log(addition);


const substraction = a.substract(b);
console.log(substraction);

const dotting = a.dot(b);
console.log(dotting);

const normalization = a.norm();
console.log(`Normalizarion vector: ${normalization}`);

try {
  a.add(c);
} catch(err) {
  console.log("Error");
}

if(a.toString()	===	'(1,2,3)') {
  console.log("toString() is ok");
}

const equalToA = new Vector([1, 2, 3]);
if(a.equals(equalToA)) {
  console.log("Vectors are equals")
}

