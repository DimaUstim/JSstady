

//create a constructor function that creates an object with its own set of prototypes

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }   //end of constructor function

    Person.prototype.sayName = function() {
        return this.name;
    }  //end of prototype function

    const person = new Person("John", 30);
    Object.defineProperties(person,{
    name: {
        configurable: false, 
        writable: false, 
        enumerable: false
    },
    age: {  
        configurable: false, 
        writable: false, 
        enumerable: false
    }
    });

    person.name="Jane";
    delete person.name;

    console.log(person);

    //create a constructor function that creates an object with its own set of prototypes using Class


    class PersonClass {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayAge() {
            return this.age;
        } //end of prototype function
    }

    const person2 = new PersonClass("Kate", 40);
    Object.defineProperties(person2,{
        name: {
            configurable: false, 
            writable: false, 
            enumerable: false
        },
        age: {  
            configurable: false, 
            writable: false, 
            enumerable: false
        }
        });
    
    person2.name="Natasha";
    delete person2.age;

    console.log(person2);