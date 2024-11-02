const imagens = document.querySelector(".imagens")
const imagem = document.querySelectorAll(".imagem")
const background = document.querySelector(".background")

for (let i = 0; i < imagem.length; i++) {
    imagem[i].addEventListener("click", function() {
        imagem[i].classList.toggle("selecionar");
        imagens.classList.toggle("selecionar")
        background.classList.toggle("selecionado")
    });
}