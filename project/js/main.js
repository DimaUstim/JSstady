// mockup start
const list = [
  "Alex",
  "Oleg",
  "Olena",
  "Alexandra",
  "Serg",
  "Ivan",
  "Ira",
  "Irina",
  "Kate",
];
// mockup end

const $ul = document.querySelector("ul#list");

const removeItem = ($element) => {
  $ul.removeChild($element);
};

//check button activity
const checkButtonActivity = ($element) => {
  if ($ul.children.length <= 10) {
    $element.disabled = false;
  }
};

  //error clearing
const errorCheck = () => {
  const $small = document.querySelector("small");
  $small.innerHTML = "";
};

//check item uniqueness
const checkUniqItem = (item) => {
  const $liList = document.querySelectorAll("li");
  for (let index = 0; index < $liList.length; index++) {
    const $li = $liList[index];
    if ($li.innerText === item) {
      addError('"' + item + '" is already in the list');
      return true;
    }
  }
  return false;
};

const $button = document.querySelector("button");

const addItem = (item) => {
//check item uniqueness
  if (checkUniqItem(item)) {
    return;
  }
//validation - check on the number of elements in the parent element
  if ($ul.children.length >= 10) {
  //disabled button
    $button.disabled = true;
    return addError("Items limit is 10 users!");
  }

  const $li = document.createElement("li");
  $li.innerText = item;
  $ul.appendChild($li);


  $li.addEventListener("click", (event) => {
    removeItem(event.target);
    checkButtonActivity($button);
    errorCheck();
  });
};

list.forEach((el, index) => {
  addItem(el);
});


// FORM PATH
const $form = document.querySelector("form#user");
const $input = $form.querySelector('input[name="user_name"]');

//add Error message
const addError = (item) => {
  let $small;
  if (document.querySelector("small")) {
    $small = document.querySelector("small");
  } else {
    $small = document.createElement("small");
  }
  $small.innerText = item;
  $form.appendChild($small);
  $small.style.color = "red";
  $small.style.fontSize = "16px";
  $small.style.marginLeft = "10px";
};

//check input value
$input.addEventListener("input", function () {
  errorCheck();
});

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = $input.value;

  // check validation
  if (value.length >= 2 && value.length <= 10) {
    addItem(value);
    $input.value = "";
  }
  if (value.length < 2) {
    addError("Name must be more than 2 characters!");
  }
  if (value.length > 10) {
    addError("Name must be less than 10 characters!");
  }
});
