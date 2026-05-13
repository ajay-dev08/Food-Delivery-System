/* FULL UPDATED script.js */

let cart = [];

let total = 0;

/* SCROLL */

function scrollFoods(){

  document.getElementById("foods").scrollIntoView({
    behavior:"smooth"
  });

}

/* ADD TO CART */

function addToCart(name,price){

  cart.push({
    name:name,
    price:price
  });

  total += price;

  updateCart();

}

/* UPDATE CART */

function updateCart(){

  let cartItems = document.getElementById("cart-items");

  cartItems.innerHTML = "";

  cart.forEach((item,index)=>{

    cartItems.innerHTML += `

      <div class="cart-item">

        <div>
          <h4>${item.name}</h4>
          <p>₹${item.price}</p>
        </div>

        <button onclick="removeItem(${index})">
          X
        </button>

      </div>

    `;

  });

  document.getElementById("total").innerText = total;

  document.getElementById("cart-count").innerText = cart.length;

}

/* REMOVE ITEM */

function removeItem(index){

  total -= cart[index].price;

  cart.splice(index,1);

  updateCart();

}

/* OPEN CART */

function openCart(){

  document.getElementById("cart").style.right = "0";

}

/* CLOSE CART */

function closeCart(){

  document.getElementById("cart").style.right = "-100%";

}

/* CHECKOUT */

function checkout(){

  if(cart.length === 0){

    alert("Your cart is empty!");

  }
  else{

    document.getElementById("paymentModal").style.display = "flex";

    document.getElementById("paymentTotal").innerText = total;

  }

}

/* CLOSE PAYMENT */

function closePayment(){

  document.getElementById("paymentModal").style.display = "none";

}

/* PAYMENT SUCCESS */

document.getElementById("paymentForm").addEventListener("submit",function(e){

  e.preventDefault();

  alert("Payment Successful! Order Confirmed.");

  cart = [];

  total = 0;

  updateCart();

  closePayment();

  closeCart();

});

/* SEARCH */

function searchFood(){

  let input = document.getElementById("searchInput").value.toLowerCase();

  let cards = document.querySelectorAll(".food-card");

  cards.forEach(card=>{

    let title = card.querySelector("h3").innerText.toLowerCase();

    if(title.includes(input)){

      card.style.display = "block";

    }
    else{

      card.style.display = "none";

    }

  });

}