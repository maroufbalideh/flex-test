let menu = document.querySelector(".menu");
let menuIconBars = document.querySelector(".header-icon__bars");
let menuIconTimes = document.querySelector(".header-icon__times");
let menuItemTimes = document.querySelector(".menu-item_times");

menuIconBars.addEventListener("click", function () {
    if (menuIconBars.classList.contains("header-icon__bars")) {
        menu.style.left = "0"
        menuIconBars.style.display = "none"
        menuIconTimes.style.display = "block"
    }
})
menuIconTimes.addEventListener("click", function () {
    if (menuIconBars.classList.contains("header-icon__bars")) {
        menu.style.left = "-14rem"
        menuIconTimes.style.display = "none"
        menuIconBars.style.display = "block"
    }
})

menuItemTimes.addEventListener("click", function () {
    menu.style.left = "-14rem"
    menuIconBars.style.display = "block"
    menuIconTimes.style.display = "none"
})