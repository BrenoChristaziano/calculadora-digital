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


let primeiroNumero = null
let operacao = null

let novoElemento = (conteudo) => {
    const p = document.createElement('p')
    p.setAttribute('class', 'nat')
    p.textContent = conteudo
    return p
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const numero = botao.textContent
        tela.appendChild(novoElemento(numero))

        // Se não houver uma operação, armazenar o primeiro número
        if (operacao === null) {
            primeiroNumero = Number(numero)
        }
    })
})

mais.addEventListener("click", () => {
    if (primeiroNumero !== null) {
        operacao = "soma" // Definindo a operação como soma
        tela.appendChild(novoElemento("+")) // Mostrando a operação na tela
    }
});

igual.addEventListener("click", () => {
    if (primeiroNumero !== null && operacao === "soma") {
        // Pega o segundo número (último número inserido)
        const numerosNaTela = [...tela.querySelectorAll('.nat')]
        const segundoNumero = Number(numerosNaTela[numerosNaTela.length - 1].textContent)

        // Realiza a soma
        const resultado = primeiroNumero + segundoNumero
        tela.value = ""
        tela.appendChild(novoElemento(resultado))

        // Reiniciar as variáveis para nova operação
        primeiroNumero = null
        operacao = null
    }
});