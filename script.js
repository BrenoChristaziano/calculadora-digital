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

let novoElemento = (tipo, conteudo) =>{
    let elemento 
    switch (tipo) {
        case 'p':
        let p = document.createElement('p')
        p.setAttribute('class', 'nat')
        break
        case 'd1':
        let d1 = document.createElement('div')
        p.setAttribute('class', 'div1')
        break
        case 'd2':
        let d2 = document.createElement('d2')
        p.setAttribute('class', 'div2')
        break
    }
    if (conteudo){
        elemento.textContent = conteudo
    }
    tela.appendChild(elemento)   
}
botoes.forEach((botao) => {
    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            // Obtém o número do texto do botão clicado
            const numero = botao.textContent
            // Chama a função novoElemento com o número clicado
            novoElemento('d1', numero)
            tela.appendChild(numero)
        })
    })
})