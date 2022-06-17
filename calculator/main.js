//calculator.js

const $number1 =  document.querySelector('#number1');
const $number2 =  document.querySelector('#number2');
const $operator =  document.querySelector('#operator');
const $result =  document.querySelector('#result');
const $button =  document.querySelector('#button');
$button.addEventListener('click', () => {
    const number1 = parseInt($number1.value);
    const number2 = parseInt($number2.value);
    const operator = $operator.value;
    if (operator === '+') {
        $result.innerHTML = number1 + number2;
    } else if (operator === '-') {  
        $result.innerHTML = number1 - number2;
    } else if (operator === '*') {
        $result.innerHTML = number1 * number2;
    } else if (operator === '/') {
        $result.innerHTML = number1 / number2;
    } else {
        $result.innerHTML = 'Error';
    }
}
);
























    

  
  
  
  
