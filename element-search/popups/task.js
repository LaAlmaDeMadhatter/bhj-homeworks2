const modalMain = document.querySelector("#modal_main");
const modalSuccess = document.querySelector("#modal_success");
const good = document.querySelector(".show-success");
const closed = Array.from(document.querySelectorAll("div.modal__close"));

modalMain.className = "modal modal_active";

good.onclick = () => {
  modalSuccess.className = "modal modal_active";
  modalMain.className = "modal";
};

closed.forEach(function (element) {
  const parent = element.closest(".modal");
  element.onclick = function () {
    parent.className = "modal";
  };
});