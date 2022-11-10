const hbmenu = document.querySelector(".hbmenu");
const submenu = document.querySelector(".submenu");
const smEl = document.querySelectorAll(".sm-el");

const hbmenuActive = hbmenu.addEventListener("click", () => {
  submenu.classList.toggle("active");
  hbmenu.classList.toggle("active");
});

smEl.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    submenu.classList.remove("active");
    hbmenu.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (e.target !== hbmenu) {
    submenu.classList.remove("active");
    hbmenu.classList.remove("active");
  }
});
