const botao = document.querySelector(".botao")
const menu = document.querySelector(".menu")

botao.addEventListener('click', () => {
    menu.classList.toggle('abrir');
});