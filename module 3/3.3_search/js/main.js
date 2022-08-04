const link = "https://swapi.dev/api/people/?page=1";
const loaderPage = document.querySelector(".pagclass");

const $ul = document.querySelector("#people_list");
const loaderSpace = document.querySelector(".spinner");
const myFilter = document.querySelector(".filter");

const addPersonItem = (person) => {
  const secondFilm = _.get(person, '["films"][1]', "Unknown");
  const $li = document.createElement("li");
  $li.className = "list-group-item";

  $li.innerText = `
        ${person["name"]}
        (birth year: ${person["birth_year"]})
        - second film: ${secondFilm}
    `;
  $ul.appendChild($li);
};

const showItems = (data) => {
  const people = $ul.children.length;
  for (i = 0; i < people; i++) {
    $ul.children[0].remove();
  }
  data.results.forEach((person) => {
    addPersonItem(person);
  });
  
};

const paginatorMaker = (res) => {
  const currentMinus = document.querySelector(".current-minus");
  const currentPlus = document.querySelector(".current-plus");
  const current = document.querySelector(".current-link");
  const previousClass = document.querySelector(".previous-class");
  const nextClass = document.querySelector(".next-class");

  let currentPageNumber;

  if (res.previous) {
    currentPageNumber = parseInt(res.previous[res.previous.length - 1]) + 1;
  }

  if (res.next) {
    currentPageNumber = parseInt(res.next[res.next.length - 1]) - 1;
  }

  current.firstChild.classList.add("active");

  res.next
    ? nextClass.classList.remove("d-none")
    : nextClass.classList.add("d-none");
  res.previous
    ? previousClass.classList.remove("d-none")
    : previousClass.classList.add("d-none");

  if (currentPageNumber === 1) {
    currentMinus.classList.add("d-none");
  } else {
    currentMinus.classList.remove("d-none");
  }

  if (currentPageNumber === Math.ceil(res.count / 10)) {
    currentPlus.classList.add("d-none");
  } else {
    currentPlus.classList.remove("d-none");
  }

  current.firstChild.innerText = currentPageNumber;
  currentMinus.firstChild.innerText = currentPageNumber - 1;
  currentPlus.firstChild.innerText = currentPageNumber + 1;

  const hideLoaderItem = () => {
    myFilter.classList.add("d-none");
    $ul.classList.add("d-none");
    loaderPage.classList.add("d-none");
    loaderSpace.classList.remove("d-none");
  }

  nextClass.firstChild.onclick = () => {
    hideLoaderItem();
    request(res.next);
  };
  previousClass.firstChild.onclick = () => {
    hideLoaderItem();
    request(res.previous);
  };
  currentMinus.firstChild.onclick = () => {
    hideLoaderItem();
    request(`${link}&page=${currentPageNumber - 1}`);
    
  };
  currentPlus.firstChild.onclick = () => {
    hideLoaderItem();
    request(`${link}&page=${currentPageNumber + 1}`);
  };
};

// add promise for data loading (and pagination);
// catching errors;
// hide preloader at the end of loading (.finally);

// const request = (url) => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       showItems(data);
//       paginatorMaker(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(() => {
//       loaderSpace.classList.add("d-none");
//     });
// };
// request(link);

//make promises via async/await ( await fetch() );
//use class (or constructor functions);

class Swapi {
  constructor() {
    this.request(link);
  }
  async request(url) {
    const res = await fetch(url);
    const data = await res.json();
    showItems(data);
    paginatorMaker(data);
    loaderSpace.classList.add("d-none");
    $ul.classList.remove("d-none");
  }
}

const swapiApi = new Swapi();
const request = swapiApi.request;

// filter d-block;
// pagination d-block;

const resizeObj = new ResizeObserver(function (entries) {
  if (entries[0].contentRect.height > 0) {
    loaderPage.classList.remove("d-none");
    myFilter.classList.remove("d-none");
  }
});

// start observing for resize;
resizeObj.observe(document.querySelector("#people_list"));

// Filter for name and birth year;
function nameFilter() {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let li = $ul.children;

  // Loop through all list items, and hide those who don't match the search query;
  for (i = 0; i < li.length; i++) {
    let txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].classList.remove("d-none");
    } else {
      li[i].classList.add("d-none");
    }
  }
}
