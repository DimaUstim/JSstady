

//create a constructor function that creates an object with its own set of prototypes

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }   //end of constructor function

    Person.prototype.sayName = function() {
        console.log(this.name);
        console.log(this.age);
    }  //end of prototype function

    const person = new Person("John", 30);
    Object.defineProperty(person, "name",{configurable: false, writable: false, enumerable: false});
    Object.defineProperty(person, "age",{configurable: false, writable: false, enumerable: false});
    
    person.sayName();
    console.log(person);

    //create a constructor function that creates an object with its own set of prototypes using Class


    class PersonClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayName() {
            console.log(this.name);
            console.log(this.age);
        } //end of prototype function
    }

    const person2 = new PersonClass("Kate", 40);
    Object.defineProperty(person2, "name",{configurable: false, writable: false, enumerable: false});
    Object.defineProperty(person2, "age",{configurable: false, writable: false, enumerable: false});
    
    person2.sayName();
    console.log(person2);