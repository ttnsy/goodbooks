const dropdownBtn = document.getElementById("drop-text");
const list = document.getElementById("list");
const icon = document.getElementById("icon");
const input = document.getElementById("search-input");
const listItems = document.querySelectorAll(".dropdown-list-item");

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
