const lista = document.getElementById("lista")
const botao = document.getElementById("adicionar-item")
const input = document.getElementById("input-item")

botao.addEventListener('click', () => {
    const item = document.createElement("li");
    if (input.value == ''){
        alert("vazio")
    } else {
        item.textContent = input.value
        lista.appendChild(item)
        input.value = '';
    }
})

input.addEventListener('keypress', (evento) => {
    if (evento.key === 'Enter') {
        const item = document.createElement("li");
        if (input.value == ''){
            alert("vazio")
        } else {
            item.textContent = input.value
            lista.appendChild(item)
            input.value = '';
        }
    }
})