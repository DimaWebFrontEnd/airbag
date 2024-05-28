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
               <div class="quantity__items">
                  ${item}
               </div>
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


/* let plus = (id) => {
   let selectedItem = id;
   let search = basket.find((x) => x.id === selectedItem.id);

   if (search === undefined) {
      basket.push({
         id: selectedItem.id,
         item: 1,
      });
   } else {
      search.item += 1;
   }
   generateCart();
   update(selectedItem.id);
   basket = basket.filter((x) => x.item !== 0);
   localStorage.setItem("airbag-data", JSON.stringify(basket));
};

let minus = (id) => {
   let selectedItem = id;
   let search = basket.find((x) => x.id === selectedItem.id);

   if (search === undefined) return;
   else if (search.item === 0) return;
   else {
      search.item -= 1;
   }
   generateCart();
   update(selectedItem.id)
   basket = basket.filter((x) => x.item !== 0);
   //generateShop();
   
   localStorage.setItem("airbag-data", JSON.stringify(basket));
}
 */

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