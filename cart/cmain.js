let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//open Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
  console.log("Hit");
}
//close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
}

//cart Working JS

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);  
    //loadlocalstorage();
  } else {
    ready();
  }

  //remove from cart
  
  function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    console.log(removeCartButtons)
    for (var i = 0; i < removeCartButtons.length; i++) {
      var button = removeCartButtons[i];
      button.addEventListener("click", removeCartItem);
    }
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var i = 0; i < quantityInputs.length; i++) {
      var input = quantityInputs[i];
      input.addEventListener("change", quantityChanged);
    }
    //add to cart
    var addCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < addCart.length; i++) {
      var button = addCart[i];
      button.addEventListener("click", addCartClicked);
    }
    // Buy Button Work
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
  }
  

  // Buy Button
  function buyButtonClicked() {
    alert('Your Order is Placed');
    var cartContent = document.getElementsByClassName('cart-content')[0];
    while(cartContent.hasChildNodes()) {
      cartContent.removeChild(cartContent.firstChild);
    }
  }


  function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    //savelocalstorage();
  }

 function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
  }
  
  function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, productImg);
    //savelocalstorage();
  }
  
  function addProductToCart(title, productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for(var i = 0; i < cartItemsNames.length; i++) {
      if(cartItemsNames[i].innerText == title){
        alert("You have already added this item to your cart!");
        return;
      }
    }
    var cartBoxContent =
                    `<img src="${productImg}" alt="" class="cart-img">
                     <div class="detail-box">
                        <div class="cart-product-title">${title}</div>
                        <input type="number" value="1" class="cart-quantity">
                      </div>
                      <!-- remove cart -->
                      <i class="bx bxs-trash-alt cart-remove"></i>`;
  
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox)
    cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem)
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
  }

  /*//LOCALSTORAGE!!!!!
  
  //save
  function savelocalstorage() {
    var savelocal = document.getElementById("itemstorage")
    localStorage.setItem("favorites", savelocal.outerHTML);
  }
  //load
  function loadlocalstorage() {
    if (localStorage.getItem("favorites")) {
      document.getElementById("itemstorage").outerHTML = localStorage.getItem("favorites");
      return;
    } else {
      ""
    }
  }*/