let header = document.querySelector("header");
let menuBtn = document.querySelector("#menu-btn");
let menuBtnClose = document.querySelector("#menu-btn-close");

menuBtn.addEventListener("click", () => {
    header.classList.toggle("show-mobile-menu");
});

menuBtnClose.addEventListener( "click", () => {
    menuBtn.click();
})