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

async function getCategories(url) {
  const response = await fetch(url);
  const { data } = await response.json();

  const categories = [];
  data.forEach((item) => {
    if (item.categories !== "NA") {
      categories.push(item.categories);
    }
  });
  
  const ulElement = document.createElement("ul");
  const categoriesUnique = [... new Set(categories)];

  categoriesUnique.forEach((category) => {
    const liElement = document.createElement("li");
    const liText = document.createTextNode(category);

    liElement.appendChild(liText);
    ulElement.appendChild(liElement);
  });

  document.querySelector(".tags").appendChild(ulElement);
}

url = "https://v1.appbackend.io/v1/rows/hZKs8Bt1xP1D";
params = "sortBy=published_date&sortOrder=desc&limit=15";
getRecentlyPublished(`${url}/?${params}`);
getCategories(`${url}`);
