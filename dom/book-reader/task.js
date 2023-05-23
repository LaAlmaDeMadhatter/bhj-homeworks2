const fontControls = Array.from(document.getElementsByClassName("font-size"));
const book = document.getElementById("book");

fontControls.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    let target = event.target;

    document.querySelectorAll(".font-size").forEach((element) => {
      element.classList.remove("font-size_active");
    });

    target.classList.add("font-size_active");

    if (target.classList.contains("font-size_small")) {
      book.classList.add("book_fs-small");
    } else if (target.classList.contains("font-size_big")) {
      book.classList.add("book_fs-big");
      book.classList.remove("book_fs-small");
    } else {
      book.classList.remove("book_fs-small", "book_fs-big");
    }
  });
});