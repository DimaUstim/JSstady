//create a constructor function that creates an object with its own set of prototypes

function Person(options) {
  this.name = options.name;
  this.age = options.age;
} //end of constructor function

Person.prototype.sayName = function () {
  return this.name;
}; //end of prototype function

const person = new Person({
  name: "John",
  age: 30,
});
Object.defineProperties(person, {
  name: {
    configurable: false,
    writable: false,
    enumerable: false,
  },
  age: {
    configurable: false,
    writable: false,
    enumerable: false,
  },
});

person.name = "Jane";
delete person.name;

console.log(person);

//create a constructor function that creates an object with its own set of prototypes using Class

class PersonClass {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
  }
  sayAge() {
    return this.age;
  } //end of prototype function
}

const person2 = new PersonClass({
  name: "Kate",
  age: 40,
});
Object.defineProperties(person2, {
  name: {
    configurable: false,
    writable: false,
    enumerable: false,
  },
  age: {
    configurable: false,
    writable: false,
    enumerable: false,
  },
});

person2.name = "Natasha";
delete person2.age;

console.log(person2);
