const img1 = document.querySelector("#img1")
const img2 = document.querySelector("#img2")
const img3 = document.querySelector("#img3")
const toboagua = document.querySelector("#toboagua")
const piscina = document.querySelector("#piscina")
const rioLento = document.querySelector("#rioLento")
const espacoInfantil = document.querySelector("#espacoInfantil")

function mudarImagem1(caminho) {
    img1.src = caminho
}

function mudarImagem2(caminho) {
    img2.src = caminho
}

function mudarImagem3(caminho) {
    img3.src = caminho
}

toboagua.addEventListener("click", function() {
    mudarImagem1("assets/imagens/toboaguas1.png");
    mudarImagem2("assets/imagens/toboaguas2.png");
    mudarImagem3("assets/imagens/toboaguas3.png");
});

piscina.addEventListener("click", function() {
    mudarImagem1("assets/imagens/piscinas1.jpg");
    mudarImagem2("assets/imagens/piscinas2.jpg");
    mudarImagem3("assets/imagens/piscinas3.jpg");
});

rioLento.addEventListener("click", function() {
    mudarImagem1("assets/imagens/rio-lento1.png");
    mudarImagem2("assets/imagens/rio-lento2.jpg");
    mudarImagem3("assets/imagens/rio-lento3.jpg");
});

espacoInfantil.addEventListener("click", function() {
    mudarImagem1("assets/imagens/infantil1.jpg");
    mudarImagem2("assets/imagens/infantil2.jpg");
    mudarImagem3("assets/imagens/infantil3.jpg");
});