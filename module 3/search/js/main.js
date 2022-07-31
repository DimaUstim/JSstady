const link = "https://swapi.dev/api/people/?page=1";

const $ul = document.querySelector("#people_list");

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

  const currentPageNumber = res.config.url[res.config.url.length - 1];

  current.firstChild.classList.add("active");

  res.data.next
    ? nextClass.classList.remove("d-none")
    : nextClass.classList.add("d-none");
  res.data.previous
    ? previousClass.classList.remove("d-none")
    : previousClass.classList.add("d-none");

  if (parseInt(currentPageNumber) === 1) {
    currentMinus.classList.add("d-none");
  } else {
    currentMinus.classList.remove("d-none");
  }

  if (parseInt(currentPageNumber) === Math.ceil(res.data.count / 10)) {
    currentPlus.classList.add("d-none");
  } else {
    currentPlus.classList.remove("d-none");
  }

  current.firstChild.innerText = currentPageNumber;
  currentMinus.firstChild.innerText = parseInt(currentPageNumber) - 1;
  currentPlus.firstChild.innerText = parseInt(currentPageNumber) + 1;

  nextClass.firstChild.onclick = () => {
    request(res.data.next);
  };
  previousClass.firstChild.onclick = () => {
    request(res.data.previous);
  };
  currentMinus.firstChild.onclick = () => {
    request(`${link}&page=${parseInt(currentPageNumber) - 1}`);
  };
  currentPlus.firstChild.onclick = () => {
    request(`${link}&page=${parseInt(currentPageNumber) + 1}`);
  };
};

const allPages = (data) => {
  request(data);
};

const request = (url) => {
  axios.get(url).then((res) => {
    showItems(res.data);
    paginatorMaker(res);
  });
};

request(link);

//spinner none
window.addEventListener("load", () => {
  const loaderSpace = document.querySelector(".spinner");

  loaderSpace.classList.add("d-none");
});

const resizeObj = new ResizeObserver(function (entries) {
  if (entries[0].contentRect.height > 0) {
    const loaderPage = document.querySelector(".pagclass");
    loaderPage.classList.remove("d-none");
  }
});

// start observing for resize
resizeObj.observe(document.querySelector("#people_list"));


//Filter for name and birth year
function nameFilter() {
  let input = document.getElementById("myInput");
  let filter = input.value.toUpperCase();
  let li = $ul.children;

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    let txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].classList.remove("d-none");
    } else {
      li[i].classList.add("d-none");
    }
  }
}
