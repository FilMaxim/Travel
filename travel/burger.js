const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu");
//const body = document.body;
const bg = document.querySelector(".popup_click");

hamb.addEventListener("click", (e) => {
  hambHandler(e);
});

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  bg.classList.toggle("open_bg");
}

//function renderPopup() {
  //popup.appendChild(menu);
//}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});
bg.addEventListener("click", closeOnClick);

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");

  bg.classList.remove("open_bg");
}
