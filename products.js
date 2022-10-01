let products = [
  {
    brand: "BODE",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/bb/P00663148.jpg",
    name: "Embroidered linen jacket",
    price: "769",
  },
  {
    brand: "ADISH",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/79/P00702898_b1.jpg",
    name: "Wool-trimmed canvas tote bag",
    price: "245",
  },
  {
    brand: "JUNYA WATANABE",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/73/P00705094_b1.jpg",
    name: "x Levi's straight cotton twill pants",
    price: "395",
  },
  {
    brand: "DOLCE&GABBANA",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/9d/P00677356_b1.jpg",
    name: "DG jacquard denim jacket",
    price: "1055",
  },
  {
    brand: "GUCCI",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/af/P00737469_b1.jpg",
    name: "Embellished printed cotton T-shirt",
    price: "549",
  },
  {
    brand: "BOTTEGA VENETA",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/dc/P00730989_d2.jpg",
    name: "Bonds aviator sunglasses",
    price: "279",
  },
  {
    brand: "DOLCE&GABBANA",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e3/P00677357_b1.jpg",
    name: "DG jacquard straight jeans",
    price: "785",
  },
  {
    brand: "THE ELDER STATESMAN",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c1/P00692494_b1.jpg",
    name: "Intarsia cashmere and silk sweater",
    price: "3259",
  },
  {
    brand: "JIL SANDER",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/90/P00682614_b1.jpg",
    name: "Medium leather-trimmed tote bag",
    price: "1085",
  },
  {
    brand: "OUR LEGACY",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a4/P00706017_d2.jpg",
    name: "Camion calf hair slippers",
    price: "339",
  },
  {
    brand: "OUR LEGACY",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/3f/P00706258_b1.jpg",
    name: "Third Cut trompe l'œil wide-leg jeans",
    price: "355",
  },
  {
    brand: "HERNO",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/29/P00662651_b1.jpg",
    name: "Down-filled vest",
    price: "405",
  },
  {
    brand: "BRUNELLO CUCINELLI",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/39/P00681151_d2.jpg",
    name: "Lace-up leather ankle boots",
    price: "1055",
  },
  {
    brand: "DEREK ROSE",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/fb/P00653280_b1.jpg",
    name: "Finley cashmere sweatpants",
    price: "609",
  },
  {
    brand: "MISSONI",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/e9/P00681985_b1.jpg",
    name: "Striped wool sweater",
    price: "465",
  },
  {
    brand: "SAINT LAURENT",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/a1/P00691941_d2.jpg",
    name: "SL 108 half-frame sunglasses",
    price: "275",
  },
  {
    brand: "BRUNELLO CUCINELLI",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/88/P00681191_b1.jpg",
    name: "Cashmere sweatpants",
    price: "2355",
  },
  {
    brand: "MISSONI",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/43/P00681987_b1.jpg",
    name: "Zig-zag knit wool sweater",
    price: "749",
  },
  {
    brand: "SAINT LAURENT",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/df/P00441441_b1.jpg",
    name: "City backpack",
    price: "665",
  },
  {
    brand: "JIL SANDER",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/c2/P00682654_d2.jpg",
    name: "Leather sneakers",
    price: "419",
  },
  {
    brand: "BRUNELLO CUCINELLI",
    img: "https://img.mytheresa.com/560/560/33/jpeg/catalog/product/68/P00681205_b1.jpg",
    name: "Wool and cashmere bomber jacket",
    price: "3745",
  },
];

// Sort by price function
function handlePrice(data) {
  let selected = document.querySelector("#byPrice").value;
  if (selected == "Low to High") {
    data = data.sort((a, b) => {
      return a.price - b.price;
    });
  }
  if (selected == "High to Low") {
    data = data.sort((a, b) => {
      return b.price - a.price;
    });
  }
  displaysProds(data);
}

// Filter by Brand function
function handleFilter(data) {
  let selected = document.querySelector("#byBrand").value;
  let filtered;

  if (selected == "BRUNELLO CUCINELLI") {
    filtered = data.filter((el) => {
      return el.brand == "BRUNELLO CUCINELLI";
    });
  }
  if (selected == "BODE") {
    filtered = data.filter((el) => {
      return el.brand == "BODE";
    });
  }
  if (selected == "ADISH") {
    filtered = data.filter((el) => {
      return el.brand == "ADISH";
    });
  }
  if (selected == "JUNYA WATANABE") {
    filtered = data.filter((el) => {
      return el.brand == "JUNYA WATANABE";
    });
  }
  if (selected == "DOLCE&GABBANA") {
    filtered = data.filter((el) => {
      return el.brand == "DOLCE&GABBANA";
    });
  }
  if (selected == "GUCCI") {
    filtered = data.filter((el) => {
      return el.brand == "GUCCI";
    });
  }
  if (selected == "BOTTEGA VENETA") {
    filtered = data.filter((el) => {
      return el.brand == "BOTTEGA VENETA";
    });
  }
  if (selected == "OUR LEGACY") {
    filtered = data.filter((el) => {
      return el.brand == "OUR LEGACY";
    });
  }
  if (selected == "JIL SANDER") {
    filtered = data.filter((el) => {
      return el.brand == "JIL SANDER";
    });
  }
  if (selected == "SAINT LAURENT") {
    filtered = data.filter((el) => {
      return el.brand == "SAINT LAURENT";
    });
  }
  displaysProds(filtered);
}

// Getting data from Local Storage
let cart_items = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist_items = JSON.parse(localStorage.getItem("wishlist")) || [];

document.querySelector("#itemCount").innerText = cart_items.length;

displaysProds(products);

function displaysProds(data) {
  document.querySelector(".main-container > .right").innerHTML = "";

  data.forEach((el, i) => {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.img;

    let brand = document.createElement("h1");
    brand.innerText = el.brand;

    let prod_name = document.createElement("p");
    prod_name.innerText = el.name;

    let price = document.createElement("p");
    price.innerText = el.price;

    btn_div = document.createElement("div");

    btn_addCart = document.createElement("button");
    btn_addCart.innerText = "Add to Cart";
    btn_addCart.addEventListener("click", function () {
      handleCart(el);
    });

    btn_wishlist = document.createElement("button");
    btn_wishlist.innerText = "Wishlist";
    btn_wishlist.addEventListener("click", function () {
      handleWishlist(el);
    });

    btn_div.append(btn_addCart, btn_wishlist);

    div.append(img, brand, prod_name, price, btn_div);
    document.querySelector(".main-container > .right").append(div);
  });

  // Add to cart function
  function handleCart(el) {
    cart_items.push(el);
    document.querySelector("#itemCount").innerText = cart_items.length;
    localStorage.setItem("cart", JSON.stringify(cart_items));
  }

  // Add to Wishlist function
  function handleWishlist(el) {
    wishlist_items.push(el);
    localStorage.setItem("wishlist", JSON.stringify(wishlist_items));
  }
}
