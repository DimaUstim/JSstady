//Fifth task (create an Set with numbers from 1000 to 1000000).

const dataSet = new Set();
for (let i = 1000; i < 1000000; i++) {
  dataSet.add(i);
}   

//Get repDigits from dataSet.
function getRepDigits(dataSet) {
    let repDigits = new Set();
    dataSet.forEach((num) => {
      let numStr = num.toString();
      let repDigit = numStr[0];
      for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] !== repDigit) {
          repDigit = "";
          break;
        }
      }
      if (repDigit !== "") {
        repDigits.add(num);
      }
    });
    return repDigits;
  }
  
  console.log(getRepDigits(dataSet));
  

//Take the twelfth repdigit and multiply it by the last one found).


  function get12th(repDigits) {
    let repDigit = "";
    let index = 0;
    repDigits.forEach((num) => {
      index++;
      if (index === 12) {
        repDigit = num;
      }
    });
    return repDigit;
  }
  


function getLast(repDigits) {
    let repDigit = "";
    repDigits.forEach((num) => {
        repDigit = num;
    });
    return repDigit;
    }
    console.log(get12th(getRepDigits(dataSet)) * getLast(getRepDigits(dataSet)));

    
            