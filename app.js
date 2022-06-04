//Перше завдання.

//a)

 function average(number1, number2) {
   return (number1 + number2) / 2;
}

console.log(average(22,44));

//b)

let average2 = (num1,num2) =>(num1 + num2) / 2;
console.log(average2(55,77)); 

//c)

const arr = [1, 2, 3, 4, 5,10,15,20,25,30,35,40,60,65,70,75,80,95,100];
const average3 = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average3);

//Друге завдання.

const calc = (a, b, c) => {
    if (c === "plus") {
    return a + b;
    } else if (c === "minus") {
    return a - b;
    } else if (c === "multiply") {
    return a * b;
    } else if (c === "divide") {
    return a / b;
    } else {
    return "Incorrect data entered";
    }           
  }

    console.log(calc(5, 5, "plus"));
