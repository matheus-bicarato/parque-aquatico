const menuHamburguer = document.querySelector("#hamburguer")
const fecharMenu = document.querySelector("#botao-fechar")
const menu = document.querySelector("#menu")

menuHamburguer.addEventListener("click", function() {
    menu.classList.remove("header-direita");
    menu.classList.add("hamburguer-on");
    menuHamburguer.classList.add("desativado");
});

fecharMenu.addEventListener("click", function() {
    menu.classList.add("header-direita");
    menu.classList.remove("hamburguer-on");
    menuHamburguer.classList.remove("desativado");
});