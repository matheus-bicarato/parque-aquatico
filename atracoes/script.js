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
    mudarImagem1("assets/imagens/piscinas3.jpg")
});