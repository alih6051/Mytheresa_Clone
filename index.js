let cart_items = JSON.parse(localStorage.getItem("cart")) || [];

document.querySelector("#itemCount").innerText = cart_items.length;
