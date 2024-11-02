const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const telefone = document.querySelector("#telefone")
const cpf = document.querySelector("#cpf")
const botao = document.querySelector("#botao")

cpf.addEventListener('input', () => {
    let valor = cpf.value.replace(/\D/g, '')

    if (valor.length > 3 && valor.length < 7) {
        cpf.value = (valor.slice(0, 3) + '.' + valor.slice(3, valor.length))
    } else if (valor.length >= 7 && valor.length < 10) {
        cpf.value = (valor.slice(0, 3) + '.' + valor.slice(3, 6) + '.' + valor.slice(6, valor.length))
    } else if (valor.length >= 9) {
        cpf.value = (valor.slice(0, 3) + '.' + valor.slice(3, 6) + '.' + valor.slice(6, 9) + '-' + valor.slice(9, valor.length))
    } else {
        cpf.value = cpf.value.replace(/\D/g, '')
    }

})

telefone.addEventListener("input", () => {
    let valor = telefone.value.replace(/\D/g, '')

    if (valor.length == 0) {
        telefone.value = telefone.value.replace(/\D/g, '')
    } else if (valor.length > 0 && valor.length < 3) {
        telefone.value = ('(' + valor.slice(0, valor.length))
    } else if (valor.length >= 3 && valor.length < 8) {
        telefone.value = ('(' + valor.slice(0, 2) + ')' + ' ' + valor.slice(2, valor.length))
    } else if (valor.length >= 8) {
        telefone.value = ('(' + valor.slice(0, 2) + ')' + ' ' + valor.slice(2, 7) + '-' + valor.slice(7, valor.length))
    }
})

botao.addEventListener("click", (e) => {
    e.preventDefault()
    
    if (nome.value === "" || email.value === "" || telefone.value === "" || cpf.value === "") {
        alert("Preencha todos os campos")
    } else {
        alert("Enviado")
    }
})
