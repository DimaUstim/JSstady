//1) find out how many elements are in a document.

const getNumberOfElements = document.querySelectorAll('*').length;
console.log(getNumberOfElements);

//2) find out how many <div> elements in a document.

const getDivOfElements = document.querySelectorAll('div').length;
console.log(getDivOfElements);

//3) find out how many NOT a <div> elements in the document.

const getNotDivElements = getNumberOfElements-getDivOfElements;
console.log(getNotDivElements);

//4) make all <p> elements in the document color: red.

const redPColor = document.querySelectorAll('p');
redPColor.forEach(function(p, index) {
	p.style.color ='red';
});

//4) One liner function:
const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

// Usage: 
addCSS("p { color:red; }")