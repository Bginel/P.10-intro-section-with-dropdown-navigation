let btnOpen = document.querySelector("button.btn-open");
let btnClose = document.querySelector("button.btn-close");
let listNav = document.querySelector(".nav");
let listLogin = document.querySelector(".login");
let bgNav = document.querySelector("div.bg-nav");

function OpenNav() {
  bgNav.classList.add("active");
  btnOpen.style.display = "none";
  btnClose.style.display = "block";
}

function CloseNav() {
  bgNav.classList.remove("active");
  btnClose.style.display = "none";
  btnOpen.style.display = "block";
}
