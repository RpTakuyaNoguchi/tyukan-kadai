const form = document.querySelector(".contents_add_form");
const button = document.querySelector(".contents_add_button_register");
const contents_add_input =
    document.getElementsByClassName("contents_add_input")[1];
const contents_list_table_items = document.getElementsByClassName(
    "contents_list_table_item"
);

const copyclipboard = document.querySelector(".copyclipboard");

export const validation = function () {
    button.addEventListener("click", () => {
        const validation = form.checkValidity();
        // const report = form.reportValidity();
        const a = contents_add_input.reportValidity();
        console.log(validation);
        console.log("ddd" + a);
        // console.log(report);
        // return validation;
    });
};

export const copyToClipboard = function () {
    for (const table_item of contents_list_table_items) {
        const item_children = table_item.children;
        // console.log(item_children);
        for (const td of item_children) {
            td.addEventListener("click", () => {
                const text = td.textContent;
                console.log(text);
                navigator.clipboard.writeText(text);
                copyclipboard.classList.add("is_active");
                setTimeout(() => {
                    copyclipboard.classList.remove("is_active");
                }, 4000);
            });
        }
    }
};
