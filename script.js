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
    // Defina o comportamento específico aqui
    novoElemento(conteudo)
}

// Adiciona o elemento <p> ao 'tela' quando um elemento com a classe 'numeros' é clicado
cdn.addEventListener("click", (evt) => {
    if (evt.target && evt.target.classList.contains('numeros')) {
        novoElemento(evt.target.innerHTML)
    }
})

// Adiciona o elemento <p> ao 'tela' quando o botão 'mais' é clicado
mais.addEventListener("click", (evt) => {
    if (evt.target === mais) {
        novoElemento(evt.target.innerHTML)
    }
})

// Adiciona o elemento <p> ao 'tela' quando o botão 'vezes' é clicado
vezes.addEventListener("click", (evt) => {
    if (evt.target === vezes) {
        novoElemento(evt.target.innerHTML)
    }
})

// Adiciona o elemento <p> ao 'tela' quando o botão 'menos' é clicado
menos.addEventListener("click", (evt) => {
    if (evt.target === menos) {
        novoElemento(evt.target.innerHTML)
    }
})

// Adiciona o elemento <p> ao 'tela' quando o botão 'divisao' é clicado
divisao.addEventListener("click", (evt) => {
    if (evt.target === divisao) {
        nonovoElemento(evt.target.innerHTML)
    }
})

// Adiciona o elemento <p> ao 'tela' quando o botão 'virgula' é clicado
virgula.addEventListener("click", (evt) => {
    if (evt.target === virgula) {
        nonovoElemento(evt.target.innerHTML)
    }
})