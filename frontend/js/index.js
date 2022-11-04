import "../scss/style.scss";

const humberger_icon = document.querySelector(".humberger_icon");
const humberger_icon_line = document.querySelector(".humberger_icon_line");
const contents_add = document.querySelector(".contents_add");
const contents_add_buttons = document.querySelector(".contents_add_buttons");

humberger_icon.addEventListener("click", () => {
  contents_add.classList.toggle("is_active");
  humberger_icon_line.classList.toggle("humberger_icon_line_active");
  contents_add_buttons.classList.toggle("is_active");
});
