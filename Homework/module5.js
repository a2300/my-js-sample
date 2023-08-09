let	NamedOne = function(firstName, lastName) {
  return {
     get firstName() { return firstName;},
     get lastName() { return lastName;} ,
     get fullName() { return firstName + " " + lastName;},

     set firstName(value) { 
       firstName = value;
     },
     set lastName(value) { 
      lastName = value;
    },
    
    set fullName(value) {
      let [newFirstName, newLastName] = value.split(" ");
      if (newLastName === undefined) throw SyntaxError("Format needed: firstName lastName");
      firstName = newFirstName;
      lastName = newLastName;
    }
  };
}

let namedOne = new NamedOne("Naomi", "Wang");
console.log(namedOne.firstName);  //Naomi
console.log(namedOne.lastName);   //Wang
console.log(namedOne.fullName);   //Naomi Wang

namedOne.firstName	=	"John"
namedOne.lastName	=	"Doe"
console.log(namedOne.fullName);   //John Doe


namedOne.fullName	=	"Bill Smith";
console.log(namedOne.firstName);  //Bill
console.log(namedOne.lastName);   //Smith

namedOne.fullName	=	"Tom";        //SyntaxError: Format needed: firstName lastName

console.log(namedOne.fullName);



