/* ------ Barra de navegação responsiva ----*/
const buttons = document.querySelectorAll(".btn");
const bgNav = document.querySelector("div.bg-nav");

function handleNav() {
  bgNav.classList.toggle("active");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle("activeButton");
    buttons[i].classList.toggle("inactiveButton");
  }
}

/* ------ Dropdonw barra de navegação ----*/
const listFeatures = document.querySelector(".features-dropdonw");
const listCompany = document.querySelector(".company-dropdonw");
const imgFeatures = document.querySelectorAll(".imgFeatures");
const imgCompany = document.querySelectorAll(".imgCompany");

function ListFeature() {
  listFeatures.classList.toggle("list-active");

  for (let x = 0; x < imgFeatures.length; x++) {
    imgFeatures[x].classList.toggle("list-active");
    imgFeatures[x].classList.toggle("list-inactive");
  }
}
function ListCompany() {
  listCompany.classList.toggle("list-active");

  for (let y = 0; y < imgCompany.length; y++) {
    imgCompany[y].classList.toggle("list-active");
    imgCompany[y].classList.toggle("list-inactive");
  }
}

/* ------ Open/close register ----*/
const openRegister = document.querySelector("#register");
const closeRegister = document.querySelector("#close-register");
const mainOpacity = document.querySelector("main");
const headerOpacity = document.querySelector("header");

function btnRegister() {
  openRegister.style.display = "block";
  openRegister.innerHTML =
    "<ul><li><img src='./images/logo.svg' /></li><li><button id='close-register'><img src='./images/icon-close-menu.svg' onclick='btnCloseRegister()' /></button></li></ul><h2>Register and be a member of snap.</h2><p class='p-register'>Name: <input type='text' id='name'></p><em id='name-error'></em><p class='p-register'>E-main: <input type='email' id='email'><em id='email-error'></em></p><p class='p-register'>Password: <input type='password' id='password'><em id='password-error'></em></p><button id='submit-register' onclick='submitRegister()'>Register</button>";
  mainOpacity.style.opacity = ".2";
  headerOpacity.style.opacity = ".2";
}

function btnCloseRegister() {
  openRegister.style.display = "none";
  mainOpacity.style.opacity = "";
  headerOpacity.style.opacity = "";
}

/* ------ validating registration ----*/
const inputName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const inputEmail = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const validEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

const inputPassword = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");

const btnSubmit = document.querySelector("#submit-register");

function Name() {
  if (inputName.value == "") {
    inputName.style.border = "2px solid hsl(0, 100%, 74%)";
    nameError.innerText = "Name cannot be empty";
  } else {
    return;
  }
}

function email() {
  if (inputEmail.value == "") {
    inputEmail.style.border = "2px solid hsl(0, 100%, 74%)";
    emailError.innerText = "E-mail cannot be empty";
  } else {
    return;
  }
}

function checkingEmail() {
  if (validEmail.test(inputEmail.value) == false) {
    inputEmail.style.border = "2px solid hsl(0, 100%, 74%)";
    inputEmail.placeholder = "email@exemple/com";
    emailError.innerText = "Looks like this is not an email";
  } else {
    return;
  }
}

function password() {
  if (inputPassword.value == "") {
    inputPassword.style.border = "2px solid hsl(0, 100%, 74%)";
    passwordError.innerText = "Password cannot be empty";
  } else {
    return;
  }
}

function submitRegister() {
  Name();
  email();
  checkingEmail();
  password();

  if (
    inputEmail.value == "" ||
    inputEmail.value == "" ||
    inputPassword.value == "" ||
    validEmail.test(inputEmail.value) == false
  ) {
    alert("Parabéns pelo cadastro!");
  } else {
    return;
  }
}
