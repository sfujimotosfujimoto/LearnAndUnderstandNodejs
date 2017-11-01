// const util = require('util');

function Person(){
  this.firstname = 'Mike';
  this.lastname = 'Landoh';
}

Person.prototype.greet = function() {
  console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman(){
  Person.call(this);
  this.badgenumber = '1234';
}

var a = new Person();

// util.inherits(Policeman, Person);
// const officer = new Policeman();

// Policeman.prototype = Object.assign(Person.prototype, Policeman.prototype);
Policeman.prototype = Object.create(Person.prototype);
// Policeman.prototype = Object.create(a);
// Policeman.prototype = Person.prototype;
const officer = new Policeman();
officer.greet();
console.log(officer.badgenumber);
console.log("1: ", officer);
console.log("2: ", officer.__proto__);
console.log("3: ", officer.__proto__.__proto__);



