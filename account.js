// Getting User List
let user_list = JSON.parse(localStorage.getItem("users")) || [];

// Getting forms
let register = document.querySelector(".form-register");
let login = document.querySelector(".form-login");

// Handling user registeration
register.addEventListener("submit", handleRegister);

function handleRegister(e) {
  e.preventDefault();

  let user = {
    first_name: register.first_name.value,
    last_name: register.last_name.value,
    email: register.email.value,
    pwd: register.pwd.value,
  };

  // Checking for already Register
  let unique = true;

  user_list.forEach((el) => {
    if (el.email == user.email) {
      alert("Email already registerd");
      unique = false;
      return;
    }
  });

  if (!unique) return;

  user_list.push(user);
  localStorage.setItem("users", JSON.stringify(user_list));

  register.reset();
}

// Handling User login
login.addEventListener("submit", handleLogin);

function handleLogin(e) {
  e.preventDefault();

  let user = {
    email: login.email.value,
    pwd: login.pwd.value,
  };

  // Checking user in User List
  let exist = false;

  user_list.forEach((el) => {
    if (el.email == user.email) {
      if (el.pwd === user.pwd) {
        alert("Login Sucessfull");
        exist = true;
      }
    }
  });

  login.reset();
  if (!exist) alert("Invaild User");
}
