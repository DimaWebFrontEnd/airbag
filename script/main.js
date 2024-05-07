/* MENU BURGER */

const burgerBtn = document.querySelector(".bi-list");
const nav = document.querySelector("nav");
const menu = document.querySelector("ul");
const closeMenu = document.querySelector(".bi-x");


burgerBtn.addEventListener("click", event => {
   nav.classList.add("active")
   menu.classList.add("active")
   infoContent.classList.remove("active");
   infoDelivery.classList.remove("active");
})

closeMenu.addEventListener("click", event => {
   nav.classList.remove("active")
   menu.classList.remove("active")
   
})

nav.addEventListener("click", event => {
   if (event.target === nav) {
      nav.classList.remove("active")
      menu.classList.remove("active")
      
   }
})


/* MENU INFO */

const infoBtn = document.querySelector(".about__us");
const infoContent = document.querySelector(".info");
const infoDelivery = document.querySelector(".delivery");
const arrowDown = document.querySelector(".bi-chevron-down");
const arrowUp = document.querySelector(".bi-chevron-up");

infoBtn.addEventListener("click", event => {
   infoContent.classList.toggle("active");
   infoDelivery.classList.toggle("active");
   arrowUp.classList.toggle("active");
   arrowDown.classList.toggle("notactive");
})
