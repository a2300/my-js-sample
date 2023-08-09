function	Person(name,	age)	{
  this.name	=	name;
  this.age	=	age;
}
Person.prototype.introduce	=	function(){
  return	'My	name	is	'	+	this.name	+	'	and	I	am	'	+	this.age;
};


var	john	=	new	Person('John',	30);
var	jack	=	new	Person('Jack',	40);
console.log(	john.introduce()	);	//	My	name	is	John	and	I	am	30
console.log(	jack.introduce()	);	//	My	name	is	Jack	and	I	am	40

function myNew(Clazz, ...args) {
  const instance = Object.create(Clazz.prototype);
  const result = Clazz.apply(instance, args);

  return result === Object(result) ? result : instance;
}
let peter = myNew(Person, 'Peter', 35);
console.log(peter);
console.log(peter.introduce());  //My name is Peter and I am 35
