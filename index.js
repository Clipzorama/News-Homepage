// navigation bar, hamburger and X bar
let navC = document.querySelector(".nav-container");
let hBar = document.querySelector(".bar");
let closeBar = document.querySelector(".close-bar");
let overlay = document.querySelector(".overlay");

hBar.addEventListener("click", () => {
    hBar.classList.add("hidden");
    navC.classList.add("active");
    closeBar.classList.remove("hidden");
    overlay.classList.add("active");
});

closeBar.addEventListener("click", () => {
    hBar.classList.remove("hidden");
    navC.classList.remove("active");
    closeBar.classList.add("hidden");
    overlay.classList.remove("active");
});