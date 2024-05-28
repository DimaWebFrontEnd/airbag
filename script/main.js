

const burgerBtn = document.querySelector(".bi-list");
const nav = document.querySelector("nav");
const menu = document.querySelector("ul");
const closeMenu = document.querySelector(".bi-x");
const html = document.querySelector("html");



/* MENU BURGER */

burgerBtn.addEventListener("click", event => {
   nav.classList.add("active");
   menu.classList.add("active");
   infoContent.classList.remove("active");
   infoDelivery.classList.remove("active");
   if (window.innerWidth < 700) {
      html.style.overflow = "hidden";
   }
})

closeMenu.addEventListener("click", event => {
   nav.classList.remove("active")
   menu.classList.remove("active")
   html.style.overflow = "auto";
})

nav.addEventListener("click", event => {
   if (event.target === nav) {
      nav.classList.remove("active")
      menu.classList.remove("active")
      html.style.overflow = "auto";
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

/* WORK TIME */

const workTime = document.querySelector(".work__time h2");
const workMenu = document.querySelector(".work__time--days");
const closeWorkMenu = document.querySelector(".work__time--days .bi-x")

workTime.addEventListener("click", e => {
   workMenu.classList.add("active");
})

closeWorkMenu.addEventListener("click", e => {
   workMenu.classList.remove("active");
})

let year = document.getElementById("year");
let thisYear =  new Date().getFullYear();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;





   

