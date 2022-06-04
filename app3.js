//Fourth task (create an Map with numbers from 1000 to 1000000).

const dataMap = new Map();
for (let i = 1000; i < 1000000; i++) {  
  dataMap.set(i, i);
}   

//Get repDigits from dataMap.
function getRepDigits(dataMap) {
    let repDigits = new Map();
    dataMap.forEach((num, key) => {
      let numStr = num.toString();
      let repDigit = numStr[0];
      for (let i = 1; i < numStr.length; i++) {
        if (numStr[i] !== repDigit) {
          repDigit = "";
          break;
        }
      }
      if (repDigit !== "") {
        repDigits.set(key, num);    
        }
    });
    return repDigits;
    }
    console.log(getRepDigits(dataMap));

//Take the twelfth repdigit and multiply it by the last one found).

    function get12th(repDigits) {
        let repDigit = "";
        let index = 0;
        repDigits.forEach((num, key) => {
            index++;
            if (index === 12) {
                repDigit = num;
            }
        });
        return repDigit;
    }

    function getLast(repDigits) {
        let repDigit = "";
        repDigits.forEach((num, key) => {
            repDigit = num;
        });
        return repDigit;
    }
    console.log(get12th(getRepDigits(dataMap)) * getLast(getRepDigits(dataMap)));