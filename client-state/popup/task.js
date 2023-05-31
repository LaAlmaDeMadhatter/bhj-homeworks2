
const modalClose = Array.from(document.getElementsByClassName("modal__close"));
const subscribeModel = document.getElementById("subscribe-modal");

if (!getCookie("subscribeModalForm")) {
    subscribeModel.classList.add("modal_active");
}

function close(){
    this.closest(".modal_active").classList.remove("modal_active");
    document.cookie = "subscribeModalForm=true";
}

function getCookie(name) {
    const cookies = "; "+ document.cookie;
    let cookie = cookies.split("; "+ name+ "=");
    if (cookie.length === 2) {
        return cookie.pop().split(";").shift();
    }
}

modalClose.forEach(element => element.onclick = close);