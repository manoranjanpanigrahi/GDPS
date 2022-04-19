const nav = document.getElementById("nav-bar");
const menu  = document.getElementById("menu");
const start  = document.getElementById("started");

console.log(start);

const openMenu = () => {
   nav.classList.toggle("show");
}
menu.addEventListener("click", openMenu)
start.addEventListener("click", openMenu)
