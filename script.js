const tela = document.querySelector('#caixa')
const botoes = [...document.querySelectorAll('.numeros')]
const clear = document.querySelector('#clear')
const mais = document.querySelector('#mais')
const vezes = document.querySelector('#vezes')
const menos = document.querySelector('#menos')
const divisao = document.querySelector('#divisao')
const virgula = document.querySelector('#virgula')
const igual = document.querySelector('#igual')

tela.addEventListener("click",(evt)=>{
    botoes.map((el)=>{
        let p = document.createElement('p')
        p.innerHTML = el
        tela.appendChild(p)
    })
})