
//First task (create an array with numbers from 1000 to 1000000).

let arr = [];
for (let i = 1000; i < 1000000; i++) {
  arr.push(i);
}

//Second task (get repDigits from arr).

let repDigits = arr.filter(function (num) {
  let numStr = num.toString();
  let repDigit = numStr.split("").every(function (digit) {
    return digit === numStr[0];
  });
  return repDigit;
});
console.log(repDigits);
console.log(repDigits.length);

//Third task (take the twelfth repdigit and multiply it by the last one found).

const digit12 = repDigits[11];
const digitLast = repDigits[repDigits.length - 1];
console.log(digit12 * digitLast);