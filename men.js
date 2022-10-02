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
