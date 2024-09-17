const tela = document.querySelector('#caixa')
const cdn = document.querySelector('#caixadenumeros')
let botoes = [...document.querySelectorAll('.numeros')]
const clear = document.querySelector('#clear')
let mais = document.querySelector('#mais')
let vezes = document.querySelector('#vezes')
let menos = document.querySelector('#menos')
let divisao = document.querySelector('#divisao')
let virgula = document.querySelector('#virgula')
let igual = document.querySelector('#igual')

let novoElemento = (tipo) => {

}

botoes.forEach((botao) => {
    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            const numero = botao.textContent           
        })
    })
})