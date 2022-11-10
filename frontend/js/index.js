import "../scss/style.scss";

const humberger_icon = document.querySelector(".humberger_icon");
const side_bar_contents_icon = document.querySelector(
    ".side_bar_contents_icon"
);
const js_contents_icon = document.querySelector(".js_contents_icon");
const js_add_sheet_open = document.querySelector(".js_add_sheet_open");
const contents_add_close_sp = document.querySelector(".contents_add_close_sp");

const humberger_icon_line = document.querySelector(".humberger_icon_line");
const contents_add = document.querySelector(".contents_add");
const contents_add_buttons = document.querySelector(".contents_add_buttons");
const contents_list = document.querySelector(".contents_list");

// ハンバーガーアイコンをクリックしたときのイベント
humberger_icon.addEventListener("click", () => {
    humberger_icon_line.classList.toggle("is_active");
});

// 追加シートを開閉するときのファンクション
function sheet_is_active() {
    const is_active = contents_add.classList.toggle("is_active");
    side_bar_contents_icon.classList.toggle("is_active");
    contents_add_buttons.classList.toggle("is_active");
    contents_list.classList.toggle("is_active");
    if (is_active === true) {
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
        document.getElementsByTagName("body")[0].style.overflow = "visible";
    }
}

function sheet_is_close() {
    contents_add.classList.remove("is_active");
    side_bar_contents_icon.classList.remove("is_active");
    contents_add_buttons.classList.remove("is_active");
    contents_list.classList.remove("is_active");
}

// スマホでコンテンツアイコンをクリックしたときのイベント
js_contents_icon.addEventListener("click", () => {
    js_contents_icon.classList.toggle("is_active");
});

// サイドバーのコンテンツアイコンをクリックしたときのイベント
side_bar_contents_icon.addEventListener("click", () => {
    sheet_is_active();
});

// スマホの追加ボタンをクリックしたときのイベント
js_add_sheet_open.addEventListener("click", () => {
    sheet_is_active();
});

// スマホのばつボタンをクリックしたときのイベント
contents_add_close_sp.addEventListener("click", () => {
    sheet_is_close();
});
