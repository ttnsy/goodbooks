function replaceSymbols (string) {
  return string.replace(/[\[\]']+/g, "");
}

function parseColSingle(string) {
  let parsed = replaceSymbols(string).trim().split(",");
  return parsed;
}

function parseColMulti(string) {
    const lastIndex = string.lastIndexOf(", ");
    const title = replaceSymbols(string.substring(0, lastIndex)).trim();
    const url = replaceSymbols(string.substring(lastIndex + 1)).trim();
    return [title, url];
}

async function getData(url) {
  const response = await fetch(url);
  const { data } = await response.json();

  data.forEach((item) => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    imageElement = document.createElement("img");
    titleElement = document.createElement("h5");
    authorElement = document.createElement("p");

    item.authors = parseColSingle(item.authors);
    item.genre = parseColSingle(item.genre);
    item.categories = parseColSingle(item.categories);
    item.also_enjoy = item.also_enjoy.split("], ").forEach((splitted) => {
      parseColMulti(splitted)
    })
    
    imageElement.src = item.thumbnail;
    titleElement.textContent = item.title;
    authorElement.textContent = item.authors;

    console.log(item);
    cardElement.append(imageElement, titleElement, authorElement);
    document.body.append(cardElement);
  });
}



getData("https://v1.appbackend.io/v1/rows/kSezugEdycRP");

