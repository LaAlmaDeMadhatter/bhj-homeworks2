const tabs = Array.from(document.querySelectorAll(".tab"));
const contents = Array.from(document.querySelectorAll(".tab__content"));

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", (event) => {
        let tabsChildren = event.target.parentElement.children;
        for (let t = 0; t < tabsChildren.length; t++) {
            tabsChildren[t].classList.remove("tab_active");
        }
        tabs[i].classList.add("tab_active");
        let tabContentChildren = event.target.parentElement.nextElementSibling.children;
        for (let c = 0; c < tabContentChildren.length; c++) {
            tabContentChildren[c].classList.remove("tab__content_active");
        }
        contents[i].classList.add("tab__content_active");

    });
}