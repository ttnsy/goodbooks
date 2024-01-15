async function getRecentlyReviewed(url) {
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

    console.log(item);
    cardElement.append(imageElement, titleElement, authorElement);
    document.querySelector(".cards").appendChild(cardElement);
  });
}

async function getUniqueCat(url) {
  const response = await fetch(url);
  const { data } = await response.json();

  console.log(data);
}

url = "https://v1.appbackend.io/v1/rows/hZKs8Bt1xP1D";
params = "sortBy=published_year&sortOrder=descending&limit=15";
getRecentlyReviewed(`${url}/?${params}`);
