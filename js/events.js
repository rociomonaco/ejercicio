const d = document;
let buttonMenu = d.getElementById('buttonMenu');
let listMenu = d.getElementById('navbarNavDropdown');
let lenguajeLinks = d.getElementById('languageLinks');

buttonMenu.addEventListener("click",()=>{
    toggleClass();
});
// Ajuste para centrar el contenido y que no se desfase
function toggleClass(){
    listMenu.classList.toggle('list-center');
    lenguajeLinks.classList.toggle('navbar-nav-language-links');
}