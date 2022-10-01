let cart_items = JSON.parse(localStorage.getItem("cart")) || [];
document.querySelector("#itemCount").innerText = cart_items.length;

let total = localStorage.getItem("grandTotal");
document.querySelector("#total").innerText = total;

// Getting Froms
let form_billing = document.querySelector(".form-billing");
let form_card = document.querySelector(".form-card");

form_card.addEventListener("submit", handlePayment);

function handlePayment(e) {
  e.preventDefault();

  if (sessionStorage.getItem("loginStatus") == null) {
    alert("Please Login before checkout");
    return;
  }

  // Getting Billing Address
  let billingData = {
    name: form_billing.fullName.value,
    email: form_billing.email.value,
    address: form_billing.address.value,
    city: form_billing.city.value,
    zip: form_billing.zip.value,
  };

  if (
    billingData.name == "" ||
    billingData.email == "" ||
    billingData.address == "" ||
    billingData.zip == "" ||
    billingData.city == ""
  ) {
    alert("Please fill complete Billing Address");
    return;
  }

  // Getting card details
  let cardData = {
    name: form_card.cardname.value,
    cardnumber: form_card.cardnumber.value,
    expmonth: form_card.expmonth.value,
    expyear: form_card.expyear.value,
    cvv: form_card.cvv.value,
  };

  if (cardData.name == "") {
    alert("Please Enter Name on Card");
    return;
  }
  if (cardData.cardnumber.length != 16) {
    alert("Please enter Vaild Card Number");
    return;
  }
  if (+cardData.expmonth > 12) {
    alert("Please enter vaild Card expiry month");
    return;
  }
  if (cardData.expyear.length != 4) {
    alert("Please enter vaild expiry year");
    return;
  }
  if (cardData.cvv.length != 3) {
    alert("Please enter vaild cvv");
    return;
  }

  // Resetting Forms
  form_billing.reset();
  form_card.reset();

  location.href = "otp.html";
}
