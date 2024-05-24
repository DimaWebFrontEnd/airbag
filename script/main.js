

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

/* CART MENU */

const cartBg = document.querySelector(".cart__menu");
const cartMenu = document.querySelector(".menu__container");
const closeCartIcon = document.querySelector(".bi-x-square");


function openCart() {
   cartBg.classList.add("active");
   cartMenu.classList.add("active");
   html.style.overflow = "hidden";
}

function closeCart() {
   cartBg.classList.remove("active");
   cartMenu.classList.remove("active");
   html.style.overflow = "auto";
}

cartBg.addEventListener("click", e => {
   if (e.target === cartBg) {
      cartBg.classList.remove("active");
      cartMenu.classList.remove("active");
      html.style.overflow = "auto";
   }
})

let generateCart = () => {
   if (basket.length !== 0) {
      return (cart.innerHTML = basket.map((x) => {
         let { id, item } = x;
         let search = catalog.find((y) => y.id === id) || [];
         let { name, price, desc, img, platform, condition, descriptLink } = search;
         //productsOrdered.innerHTML = `Назва: ${name} ${condition}, Ціна: ${price}грн, Платформа: ${platform}`;
         return `
         
      <div id="product-id-${id}" class="menu__container--products">

         <figure>
            <img src="${img}" alt="">
         </figure>
         <p>${name}</p>
         
         <div class="quantity">
            <p>Кількість:</p>
            <div class="quantity__items">
               <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
               <div class="quantity__items">${item}</div>
               <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
            </div>
         </div>
         <div class="summary">
            <p>Вартість:</p>
            <p>${item * search.price} грн</p>
         </div>
         
      </div>
      `;
   }).join(""));
}
else {
   closeCart()
   cart.innerHTML = "Кошик порожній";  

}
}

let TotalAmount = () => {
   if (basket.length !== 0) {
      let amount = basket.map((x) => {
         let { item, id } = x;
         let search = catalog.find((y) => y.id === id) || [];
         return item * search.price;
      }).reduce((x, y) => x + y, 0);
      //console.log(amount);
      let totalIt = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
      total.innerHTML = `
   <div class="cart__aside">
   <h1>Разом:</h1>
   <div class="total__items">
         <p class="quantity__how-much">Кількість товару:</p>
         <p>${totalIt}</p>
   </div>
      <div class="total__summary">
         <p>До сплати:</p>
         <p id="total-sum" class="total__summary--numb">${amount} грн</p>
      </div>
      
   </div>
      `
   } else return;
};

TotalAmount();



   

