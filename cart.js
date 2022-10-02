let cart_items = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelector("#itemCount").innerText = cart_items.length;

// Logout Feature

if (sessionStorage.getItem("loginStatus") == "true") {
  let logout_div = document.createElement("div");
  logout_div.style.marginLeft = "20px";
  logout_div.innerText = "Logout ";

  logout_div.addEventListener("click", handleLogout);

  let logo = document.createElement("i");
  logo.classList.add("fa-solid", "fa-right-from-bracket");

  logout_div.append(logo);
  document.querySelector(".logout").append(logout_div);
}

function handleLogout() {
  sessionStorage.removeItem("loginStatus");
  location.reload();
}

let cartValue = cart_items.reduce((acc, el) => {
  return acc + +el.price;
}, 0);

//  Handling Checkout

function handleCheckout() {
  localStorage.setItem("grandTotal", cartValue);
  location.href = "checkout.html";
}

displayCart(cart_items);

function displayCart(data) {
  document.querySelector(".cart_items").innerHTML = "";
  document.querySelector("#total").innerText = cartValue;

  data.forEach((el, i) => {
    let main_div = document.createElement("div");

    // creting left div
    let div_left = document.createElement("div");

    let div_img = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;

    div_img.append(img);

    let div_detail = document.createElement("div");
    let title = document.createElement("h1");
    title.innerText = el.name;

    let brand = document.createElement("p");
    brand.innerText = el.brand;

    let price = document.createElement("p");
    price.innerText = el.price;

    div_detail.append(title, brand, price);
    div_left.append(div_img, div_detail);

    // creting right div
    let div_right = document.createElement("div");

    let btn_sub = document.createElement("button");
    btn_sub.innerText = "-";
    btn_sub.addEventListener("click", function (e) {
      let currentQuant = +e.target.nextSibling.innerText;
      if (currentQuant > 1) {
        e.target.nextSibling.innerText = +e.target.nextSibling.innerText - 1;
        handleQuantSub(price.innerText);
      }
    });

    let count = document.createElement("p");
    count.innerText = "1";

    let btn_add = document.createElement("button");
    btn_add.innerText = "+";
    btn_add.addEventListener("click", function (e) {
      e.target.previousSibling.innerText =
        +e.target.previousSibling.innerText + 1;

      handleQuantAdd(price.innerText);
    });

    let btn_remove = document.createElement("button");
    btn_remove.innerText = "Remove";
    btn_remove.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.remove();
      handleRemove(
        i,
        price.innerText,
        e.target.previousSibling.previousSibling.innerText
      );
    });

    div_right.append(btn_sub, count, btn_add, btn_remove);

    main_div.append(div_left, div_right);
    document.querySelector(".cart_items").append(main_div);
  });

  // Remove item from cart
  function handleRemove(i, price, count) {
    cartValue -= +price * count;
    cart_items.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cart_items));
    displayCart(cart_items);
  }

  // Handling Quantity Decrease
  function handleQuantSub(price) {
    cartValue -= +price;
    document.querySelector("#total").innerText = cartValue;
  }

  // Handling Quantity Increase
  function handleQuantAdd(price) {
    cartValue += +price;
    document.querySelector("#total").innerText = cartValue;
  }
}
