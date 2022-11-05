import "../scss/style.scss";

const humberger_icon = document.querySelector(".humberger_icon");
const group_add_icon = document.querySelector(".group_add_icon");
const humberger_icon_line = document.querySelector(".humberger_icon_line");
const contents_add = document.querySelector(".contents_add");
const contents_add_buttons = document.querySelector(".contents_add_buttons");
const contents_list = document.querySelector(".contents_list");

humberger_icon.addEventListener("click", () => {
  humberger_icon_line.classList.toggle("is_active");
});

group_add_icon.addEventListener("click", () => {
  group_add_icon.classList.toggle("is_active");
  contents_add.classList.toggle("is_active");
  contents_add_buttons.classList.toggle("is_active");
  contents_list.classList.toggle("is_active");
});
