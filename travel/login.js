const login = document.querySelector(".popup_login");
const btnLogin = document.querySelector(".form_login");
const mirror = document.querySelector(".mirror");
const account = document.getElementById("account");
const register = document.getElementById("register");
const sign = document.getElementById("sign");

//click on button Login
const callLogin = () => {
  login.classList.add("open");
  mirror.classList.add("open");
};

//closing occurs when clicking outside the popup
const endCallLogin = () => {
  login.classList.remove("open");
  mirror.classList.remove("open");
};

// click link register
const signUp = () => {

  if (register.innerHTML === "Register") {
    document.getElementById("facebook").style.display = "none";
    document.getElementById("google").style.display = "none";
    document.getElementById("lineOr").style.display = "none";
    document.getElementById("forgot").style.display = "none";
    document.getElementById("logInTo").innerHTML = "Create account";
    document.getElementById("sign").innerHTML = "Sign Up";
    document.getElementById("noAccount").innerHTML = "Already have an account?";
    document.getElementById("register").innerHTML = "Log in";
  } else {
    document.getElementById("facebook").style.display = "flex";
    document.getElementById("google").style.display = "flex";
    document.getElementById("lineOr").style.display = "flex";
    document.getElementById("forgot").style.display = "inline";
    document.getElementById("logInTo").innerHTML = "Log in to your account";
    document.getElementById("sign").innerHTML = "Sign In";
    document.getElementById("noAccount").innerHTML = "Don’t have an account?";
    document.getElementById("register").innerHTML = "Register";
  }
};

const userData = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password2").value;
  let str = "E-mail: " + email + "\n Password: " + password;
  alert(str);
};

btnLogin.addEventListener("click", callLogin); //на кнопку логин
mirror.addEventListener("click", endCallLogin);
account.addEventListener("click", callLogin); // на кнопку account в мобильной версии
register.addEventListener("click", signUp); //на ссылку register
sign.addEventListener("click", userData);
