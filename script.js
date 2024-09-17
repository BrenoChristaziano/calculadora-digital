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

let novoElemento = (conteudo) => {
    const p = document.createElement('p')
    p.setAttribute('class', 'nat')
    p.textContent = conteudo
    return p
}

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const numero = botao.textContent
        let elemento  = novoElemento(numero) 
        tela.appendChild(elemento)          
    })
})

mais.addEventListener("click", (evt)=>{
        if (mais != mais.checked) {
            let adiçao = mais.textContent
            let novo = novoElemento(adiçao)
            tela.appendChild(novo)
        }
})

igual.addEventListener("click", (evt) =>{
    const num = Number(botoes)
    if (num == !isNaN(num)){
        let soma = num = num
        tela.appendChild(soma)
    }
})