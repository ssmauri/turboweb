const navBtn = document.querySelector(".nav-btn");
const contMenu = document.querySelector(".contenedor-menu" );

navBtn.addEventListener("click", () => {
 contMenu.classList.toggle("contenedor-menu_visible");
});