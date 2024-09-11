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

// Função para criar e adicionar um novo elemento <p> ao contêiner 'tela'
let novoElemento = (conteudo) => {
    let p = document.createElement('p')
    p.setAttribute('class', 'nat')
    p.innerHTML = conteudo
    tela.appendChild(p)
}


let nonovoElemento = (conteudo) => {
    novoElemento(conteudo)
}

cdn.addEventListener("click", (evt) => {
    if (evt.target && evt.target.classList.contains('numeros')) {
        novoElemento(evt.target.innerHTML)
    }   
})

mais.addEventListener("click", (evt) => {
    if (evt.target === mais) {
        novoElemento(evt.target.innerHTML)
    }
})


vezes.addEventListener("click", (evt) => {
    if (evt.target === vezes) {
        novoElemento(evt.target.innerHTML)
    }
})

menos.addEventListener("click", (evt) => {
    if (evt.target === menos) {
        novoElemento(evt.target.innerHTML)
    }
})

divisao.addEventListener("click", (evt) => {
    if (evt.target === divisao) {
        nonovoElemento(evt.target.innerHTML)
    }
})

virgula.addEventListener("click", (evt) => {
    if (evt.target === virgula) {
        nonovoElemento(evt.target.innerHTML)
    }
})

igual.addEventListener("click", (evt)=>{
    const op = [
        ()=>{
            const soma = Number(botoes) + Number(botoes)
            tela.appendChild(soma)
        },
        ()=>{
            const multiplicação = Number(botoes) * Number(botoes)
            igual.appendChild(multiplicação)
        },
        ()=>{
            const menos = Number(botoes) - Number(botoes)
            igual.appendChild(menos)
        },
        ()=>{
            const divisão = Number(botoes) / Number(botoes)
            igual.appendChild(divisao)
        }
    ]
    if (mais == mais.check){
        mais.addEventListener("click",op[0])
    }else if (vezes === vezes.check){
        vezes.addEventListener("click",op[1])
    }else if (menos === menos.check){
        menos.addEventListener("click",op[2])
    }else if (divisao === divisao.check){
        divisao.addEventListener("click",op[3])
    }
})