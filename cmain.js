
if (document.readyState == 'loading') {

    document.addEventListener('DOMContentLoaded', ready);
  
    loadlocalstorage();
  
  } else {
  
    ready();
  
  }
  
  
  
  //remove from cart
  
  function ready() {
  
    var removeCartButtons = document.getElementsByClassName('cart-remove');
  
    for (var i = 0; i < removeCartButtons.length; i++) {
  
      var button = removeCartButtons[i];
  
      button.addEventListener('click', removeCartItem);
  
    }
  
  }
  
  
  
  function removeCartItem(event) {
  
    var buttonClicked = event.target;
  
    buttonClicked.parentElement.remove();
  
    savelocalstorage();
  
  }
  
  
  
  //add to cart
  
  var addCart = document.getElementsByClassName("add-cart");
  
  for (var i = 0; i < addCart.length; i++) {
  
    var button = addCart[i];
  
    button.addEventListener("click", addCartClicked);
  
  }
  
  
  
  function addCartClicked(event) {
  
    var button = event.target;
  
    var shopProducts = button.parentElement;
  
    var title = shopProducts.getElementsByClassName("img-title")[0].innerText;
  
    var text = shopProducts.getElementsByClassName("img-text")[0].innerText;
  
    var bild = shopProducts.getElementsByClassName("itemBox-img")[0].src;
  
  
  
    var cartShopBox = document.createElement("div");
  
    cartShopBox.classList.add("cart-box");
  
    var cartitems = document.getElementsByClassName("cart-content")[0];
  
    var cartitemsNames = cartitems.getElementsByClassName("cart-ptitle");
  
    for (var i = 0; i < cartitemsNames.length; i++) {
  
      if (cartitemsNames[i].innerText == title) {
  
        alert("Sie haben dieses Produkt bereits zu Ihren Favoriten hinzugefügt");
  
        return;
  
      }
  
    }
  
  
  
    var cartBoxContent = `
  
      <img src="${bild}" class="cart-img">
  
      <div class="detail-box">
  
        <div class="cart-ptitle">${title}</div>
  
        <div class="cart-content">${text}</div>
  
      </div>
  
      <i class ="fa fa-trash-o cart-remove"></i>
  
      `;
  
  
  
    cartShopBox.innerHTML = cartBoxContent;
  
    cartitems.append(cartShopBox);
  
    cartShopBox
  
      .getElementsByClassName('cart-remove')[0]
  
      .addEventListener('click', removeCartItem);
  
    savelocalstorage();
  
  }
  
  
  
  //LOCALSTORAGE!!!!!
  
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
  
  }