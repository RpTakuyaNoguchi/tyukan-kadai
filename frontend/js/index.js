import "../scss/style.scss";

const humberger_icon = document.querySelector(".humberger_icon");
const contents_add = document.querySelector(".contents_add");
const contents_add_inner = document.querySelector(".contents_add_inner");

humberger_icon.addEventListener("click", () => {
  contents_add.classList.toggle("contents_add_active");
  contents_add_inner.classList.toggle("contents_add_inner_active");
});
