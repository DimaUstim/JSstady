// mockup start
const list = [
    'Alex',
    'Oleg',
    'Olena'
];
// mockup end


const $ul = document.querySelector('ul#list');

const removeItem = ($element) => {
    $ul.removeChild($element);
};

const addItem = (item) => {
   
//validation - check on the number of elements in the parent element
if ($ul.children.length >= 10) { 
    return addError('Items limit is 10 users!');
}

const $li = document.createElement('li');
$li.innerText = item;
$ul.appendChild($li);
   

$li.addEventListener('click', (event) => {
    removeItem(event.target);
    });
};

const updateItem = () => {};

list.forEach((el, index) => {
    addItem(el);
});


// FORM PATH
const $form = document.querySelector('form#user');
const $input = $form.querySelector('input[name="user_name"]');

//add Error message
const addError = (item) => {
    const $small = document.createElement('small');
    $small.innerText = item;
    $form.appendChild($small);
    $small.style.color = 'red';
    $small.style.fontSize = '16px';
    $small.style.marginLeft = '10px';
}


$form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = $input.value;
    // check validation
    if (value.length >= 2 && value.length <= 10) {
        addItem(value);
        $input.value = '';
    }if (value.length < 2) {
        addError('Name must be more than 2 characters!');
    }if (value.length > 10) {
        addError('Name must be less than 10 characters!');
    }
});









