
// SearchBox
const dropdownBtn = document.getElementById("drop-text");
const list = document.getElementById("list");
const icon = document.getElementById("icon");
const input = document.getElementById("search-input");
const listItems = document.querySelectorAll(".dropdown-list-item");
const searchResult = document.querySelector(".search-result");

dropdownBtn.addEventListener("click", () => {
  if (list.classList.contains("show")) {
    icon.style.rotate = "0deg";
  } else {
    icon.style.rotate = "-180deg";
  }
  list.classList.toggle("show");
});

window.addEventListener("click", (e) => {
  if (
    e.target.id !== "drop-text" &&
    e.target.id !== "span" &&
    e.target.id !== "icon"
  ) {
    list.classList.remove("show");
    icon.style.rotate = "0deg";
  }
});

listItems.forEach((listItem) => {
  listItem.addEventListener("click", (e) => {
    span.innerText = e.target.innerText;
    input.placeholder = `Search by ${e.target.innerText}`;
  });
});

function showResult() {
  if (
    searchResult.style.display == "none" ||
    searchResult.style.display === ""
  ) {
    searchResult.style.display = "flex";
  }
}

window.addEventListener("click", (e) => {
  if (e.target.id !== "search-input" && searchResult.style.display === "flex") {
    searchResult.innerHTML = '';
    searchResult.style.display = "none";
  }
});

// Fetch Data
async function load(url) {
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

function loadUniqueElements(key, parent) {
  promise.then((json) => {
    const keys = [];
    let keysUnique = [];
    json.data.forEach((item) => {
      if (item[key] !== "NA") {
        keys.push(item[key]);
      }
    });

    const ulElement = document.createElement("ul");
    keysUnique = [...new Set(keys.sort())];
    
    keysUnique.forEach((key) => {
      const liElement = document.createElement("li");
      const liText = document.createTextNode(key);

      liElement.appendChild(liText);
      ulElement.appendChild(liElement);
    });

    parent.innerHTML = '';
    parent.appendChild(ulElement);
  });
}

async function getRecentlyPublished(url) {
  const response = await fetch(url);
  const { data } = await response.json();

  data.forEach((item) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";

    imageElement = document.createElement("img");
    titleElement = document.createElement("h4");
    authorElement = document.createElement("p");

    imageElement.src = item.thumbnail;
    titleElement.textContent = item.title;
    authorElement.textContent = item.authors;

    cardElement.append(imageElement, titleElement, authorElement);
    document.querySelector(".cards").appendChild(cardElement);
  });
}

const url = "https://v1.appbackend.io/v1/rows/hZKs8Bt1xP1D";
const params = "sortBy=published_date&sortOrder=desc&limit=15";

const promise = load(url);
getRecentlyPublished(`${url}/?${params}`);

loadUniqueElements(
  "categories",
  document.querySelector(".tags")
)

input.addEventListener("click", () => {
  key = document.getElementById("span").innerText.toLocaleLowerCase();
  parent = document.querySelector(".search-result")
  loadUniqueElements(key, parent);
})

input.addEventListener("input", function (e) {
  query = this.value.toLowerCase();
  liElements = document.querySelectorAll(".search-result li");
  liElements.forEach((e) => {
    let title = e.innerText.toLowerCase();

    if (query === "" || title.startsWith(query)) {
      e.style.display = "flex";
    } else {
      e.style.display = "none";
    }
  });
});


